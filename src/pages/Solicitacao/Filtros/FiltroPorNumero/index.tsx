import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

import { useNavigation } from "@react-navigation/native";
import { useSolicitation } from "../../../../hooks/solicitation";

import { Container } from "../../../../components/Layout/Container";
import Card from "../../../../components/Layout/Card";

// import { Container } from './styles';

const FiltroPorNumero: React.FC = () => {
  const { goBack } = useNavigation();
  const { numeroSolicitacao, setNumeroSolicitacao } = useSolicitation();

  return (
    <Container>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Card>
          <Input
            value={numeroSolicitacao}
            placeholder="Informe o número da solicitação"
            onChangeText={(value) =>
              setNumeroSolicitacao(value.replace(/[^0-9]/g, ""))
            }
          />
        </Card>
      </ScrollView>
      <View style={styles.bottom}>
        <Button
          containerStyle={styles.button}
          raised
          title="Aplicar"
          onPress={() => goBack()}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  checkBox: { backgroundColor: "white", borderColor: "white" },
  bottom: {
    flex: 0.23,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: 10,
  },
  button: { width: 100 },
});

export default FiltroPorNumero;
