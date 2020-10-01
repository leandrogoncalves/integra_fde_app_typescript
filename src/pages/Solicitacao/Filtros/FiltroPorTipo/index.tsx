import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";

import { useSolicitation } from "../../../../hooks/solicitation";
import { useAuth } from "../../../../hooks/auth";
import SubjectService from "../../../../services/subjectService";

import { Container } from "../../../../components/Layout/Container";
import { Title } from "../../../../components/Typography/Title";
import Card from "../../../../components/Layout/Card";
import Loader from "../../../../components/Layout/Loader";

// import { Container } from './styles';

const FiltroPorTipo: React.FC = () => {
  const { token } = useAuth();
  SubjectService.setToken(token);
  const [loader, setLoader] = useState(true);
  const { goBack } = useNavigation();
  const { assunto, setAssunto } = useSolicitation();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await SubjectService.getSubjects();
      setSubjects(data);
      setLoader(false);
    })();
  }, []);

  return (
    <Container>
      {loader && <Loader />}
      {subjects.length > 0 && <Title>Selecione um assunto</Title>}

      <Card>
        {subjects.length === 0 && (
          <Title>
            {loader ? "Carregando..." : "Nenhuma assunto encontrada"}
          </Title>
        )}

        <ScrollView keyboardShouldPersistTaps="handled">
          {subjects.length > 0 &&
            subjects.map((subject) => (
              <CheckBox
                left
                key={subject?.key}
                title={subject?.label}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={subject?.value === assunto?.value}
                containerStyle={styles.checkBox}
                onPress={() => {
                  setAssunto(subject);
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
