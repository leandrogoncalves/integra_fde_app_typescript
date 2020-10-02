import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";

import { useSolicitation } from "../../../../hooks/solicitation";
import { useAuth } from "../../../../hooks/auth";
import typeService from "../../../../services/typeService";

import { Container } from "../../../../components/Layout/Container";
import { Title } from "../../../../components/Typography/Title";
import Card from "../../../../components/Layout/Card";
import Loader from "../../../../components/Layout/Loader";

// import { Container } from './styles';

const FiltroPorTipo: React.FC = () => {
  const { token } = useAuth();
  typeService.setToken(token);
  const [loader, setLoader] = useState(true);
  const { goBack } = useNavigation();
  const { tipo, setTipo } = useSolicitation();
  const [types, setTypes] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await typeService.getTypes();
      setTypes(data);
      setLoader(false);
    })();
  }, []);

  return (
    <Container>
      {loader && <Loader />}
      {types.length > 0 && <Title>Selecione um assunto</Title>}

      <Card>
        {types.length === 0 && (
          <Title>
            {loader ? "Carregando..." : "Nenhuma assunto encontrada"}
          </Title>
        )}

        <ScrollView keyboardShouldPersistTaps="handled">
          {types.length > 0 &&
            types.map((type) => (
              <CheckBox
                left
                key={type?.value}
                title={type?.label}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={type?.value === tipo?.value}
                containerStyle={styles.checkBox}
                onPress={() => {
                  setTipo(type);
                  goBack();
                }}
              />
            ))}
        </ScrollView>
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  checkBox: { backgroundColor: "white", borderColor: "white" },
});

export default FiltroPorTipo;
