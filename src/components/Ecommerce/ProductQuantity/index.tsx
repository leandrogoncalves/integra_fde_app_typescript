import React from "react";
import { Button, Icon } from "react-native-elements";
import { useEcommerce } from "../../../hooks/ecommerce";

import { Container, ProductQuantityInput, styles } from "./styles";

const ProductQuantity: React.FC = ({ buttonSize, productId, ...rest }) => {
  const { productQuantity, setProductQuantity } = useEcommerce();

  const decreaseQuantity = () => {
    // TODO Refatorar para adicionar quantidade do produto no carrinho
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
    <Container buttonSize>
      <Button
        icon={<Icon name="remove" size={buttonSize || 20} color="white" />}
        buttonStyle={
          buttonSize ? styles.buttonContainerMini : styles.buttonContainer
        }
        onPress={() => decreaseQuantity()}
      />
      <ProductQuantityInput>{productQuantity}</ProductQuantityInput>
      <Button
        icon={<Icon name="add" size={buttonSize || 20} color="white" />}
        buttonStyle={
          buttonSize ? styles.buttonContainerMini : styles.buttonContainer
        }
        onPress={() => increaseQuantity()}
      />
    </Container>
  );
};

export default ProductQuantity;
