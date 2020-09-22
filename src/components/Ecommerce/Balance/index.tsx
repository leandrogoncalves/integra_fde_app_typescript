import React, { useEffect } from "react";
import currency from "../../../utils/formatNumber";
import { useEcommerce } from "../../../hooks/ecommerce";
import ListItem from "../../Layout/ListItem";

const Balance: React.FC = () => {
  const {
    initialBalance,
    totalBalance,
    setTotalBalance,
    cartTotal,
  } = useEcommerce();

  useEffect(() => {
    setTotalBalance(initialBalance - cartTotal);
  }, [cartTotal]);

  return (
    <ListItem
      divider
      dense
      title={`Saldo restante: ${currency(totalBalance)}`}
      subtitle={`Saldo inicial: ${currency(initialBalance)}`}
      style={{
        marginBottom: 5,
      }}
    />
  );
};

export default Balance;
