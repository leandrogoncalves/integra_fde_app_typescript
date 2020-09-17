import React from "react";
// import { useEcommerce } from "../../../hooks/ecommerce";
import ListItem from "../../Layout/ListItem";

const Solicitante: React.FC = () => {
  // const { profile } = useEcommerce();

  return (
    <ListItem
      divider
      dense
      title="Saldo Restante: R$ 2000,00"
      subtitle="Saldo inicial: R$ 2000,00"
      style={{
        marginBottom: 5,
      }}
    />
  );
};

export default Solicitante;
