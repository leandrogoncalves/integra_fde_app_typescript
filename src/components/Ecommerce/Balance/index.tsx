import React from "react";
import currency from "../../../utils/formatNumber";
import { useEcommerce } from "../../../hooks/ecommerce";
import ListItem from "../../Layout/ListItem";

const Balance: React.FC = () => {
  const { initialBalance, totalBalance } = useEcommerce();

  return (
    <ListItem
      divider
      dense
      title={`Saldo restante: ${currency(initialBalance)}`}
      subtitle={`Saldo inicial: ${currency(totalBalance)}`}
      style={{
        marginBottom: 5,
      }}
    />
  );
};

export default Balance;
