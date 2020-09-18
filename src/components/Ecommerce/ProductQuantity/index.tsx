import React from "react";
import { Button, Icon } from "react-native-elements";
import { useEcommerce } from "../../../hooks/ecommerce";

import { Container, ProductQuantityInput, styles } from "./styles";

const ProductQuantity: React.FC = () => {
  const { productQuantity, setProductQuantity } = useEcommerce();

  const decreaseQuantity = () => {
    if (productQuantity && productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (productQuantity) {
      setProductQuantity(productQuantity + 1);
    }
  };

  return (
    <Container>
      <Button
        icon={<Icon name="remove" size={20} color="white" />}
        buttonStyle={styles.buttonContainer}
        onPress={() => decreaseQuantity()}
      />
      <ProductQuantityInput>{productQuantity}</ProductQuantityInput>
      <Button
        icon={<Icon name="add" size={20} color="white" />}
        buttonStyle={styles.buttonContainer}
        onPress={() => increaseQuantity()}
      />
    </Container>
  );
};

export default ProductQuantity;
