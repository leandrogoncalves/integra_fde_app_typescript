import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";

import { useSolicitation } from "../../../../hooks/solicitation";
import { useAuth } from "../../../../hooks/auth";
import SituationService from "../../../../services/situationService";

import { Container } from "../../../../components/Layout/Container";
import { Subtitle } from "../../../../components/Typography/Subtitle";
import { Title } from "../../../../components/Typography/Title";
import Card from "../../../../components/Layout/Card";
import Loader from "../../../../components/Layout/Loader";

// import { Container } from './styles';

const FiltroPorSituacao: React.FC = () => {
  const { token } = useAuth();
  SituationService.setToken(token);
  const [loader, setLoader] = useState(true);
  const { goBack } = useNavigation();
  const { situacao, setSituacao } = useSolicitation();
  const [situations, setSituations] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await SituationService.getSituations();
      setSituations(data);
      setLoader(false);
    })();
  }, []);

  return (
    <Container>
      {loader && <Loader />}
      {situations.length > 0 && <Title>Selecione uma situação</Title>}

      <Card>
        {situations.length === 0 && (
          <Title>
            {loader ? "Carregando..." : "Nenhuma situação encontrada"}
          </Title>
        )}

        <View style={{ height: "95%" }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            {situations.length > 0 &&
              situations.map((situation) => (
                <View>
                  <Subtitle>{situation.setor}</Subtitle>
                  {situation?.situacoes &&
                    situation.situacoes.map((s) => (
                      <CheckBox
                        left
                        key={s.value}
                        title={s.label}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={s.value === situacao?.value}
                        containerStyle={styles.checkBox}
                        onPress={() => {
                          setSituacao(s);
                          goBack();
                        }}
                      />
                    ))}
                </View>
              ))}
          </ScrollView>
        </View>
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  checkBox: { backgroundColor: "white", borderColor: "white" },
});

export default FiltroPorSituacao;
