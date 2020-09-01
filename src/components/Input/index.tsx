import React,
{
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  {name, icon, ...rest},
  ref
) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({value:defaultValue});

  const [isFocused, SetIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);


  const handleInputFocus = useCallback(() => {
    SetIsFocused(true);
  },[]);

  const handleInputBlur = useCallback(() => {
    SetIsFocused(false);
    //Se tiver valor retorna true senão false
    setIsFilled(!!inputValueRef.current.value);
  },[]);

  /**
   * Registra o butao com a lib unform ao renderizar
   */
  useEffect(() =>{
    registerField<string>({
      name:fieldName,
      ref:inputValueRef.current,
      path:'value',
      setValue(ref:any, value) {
        inputValueRef.current.value = value;
        //Muda visualmente o valor do input
        inputElementRef.current.setNativeProps({text:value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      }
    });
  },[fieldName, registerField]);

  /**
   * Faz a comunicação com o elemento pai
   */
  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    }
  }));

  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon name={icon} size={20} color={isFocused || isFilled ? '#000' : "#ccc"} />
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#ccc"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  )
};

export default forwardRef(Input);
