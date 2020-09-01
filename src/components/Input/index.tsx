import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
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
    <Container>
      <Icon name={icon} size={20} color="#ccc" />
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#ccc"
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  )
};

export default forwardRef(Input);
