import React from "react";
import { View, Text } from "react-native";
import { Colors } from "../../../config/ColorsConfig";
import { useAuth } from "../../../hooks/auth";
import { useEcommerce } from "../../../hooks/ecommerce";
import ListItem from "../../Layout/ListItem";

// import { Container } from './styles';

const Solicitante: React.FC = () => {
  const { profile } = useEcommerce();
  const { user } = useAuth();

  return (
    <ListItem
      divider
      dense
      title={user.name}
      subtitle={profile}
      rightElement={(
        <>
          <View style={{ paddingRight: 10 }}>
            <Text style={{ color: Colors.highlight.primary }}>Saldo:</Text>
            <Text style={{ color: Colors.highlight.primary }}>R$2000,00</Text>
          </View>
        </>
      )}
      style={{
        marginBottom: 5,
      }}
    />
  );
};

export default Solicitante;
