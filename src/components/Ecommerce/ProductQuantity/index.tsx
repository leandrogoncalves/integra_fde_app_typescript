import React, { useState, useEffect } from "react";
import { Button, Icon } from "react-native-elements";
import { useEcommerce } from "../../../hooks/ecommerce";

import { Container, ProductQuantityInput, styles } from "./styles";

const ProductQuantity: React.FC = ({
  buttonSize,
  productId,
  amount,
  ...rest
}) => {
  const {
    cart,
    productQuantity,
    setProductQuantity,
    updateCartItemAmount,
  } = useEcommerce();
  const [productAmount, setProductAmount] = useState<number>(0);
  const [id, setId] = useState<number>(0);

  const decreaseQuantity = () => {
    if (!productId) {
      if (productQuantity && productQuantity > 1) {
        setProductQuantity(productQuantity - 1);
      }
    } else if (productAmount && productAmount > 1) {
      const newProductAmount = productAmount - 1;
      setProductAmount(newProductAmount);
      updateCartItemAmount(id, newProductAmount);
    }
  };

  const increaseQuantity = () => {
    if (!productId) {
      if (productQuantity) {
        setProductQuantity(productQuantity + 1);
      }
    }
    if (productAmount) {
      const newProductAmount = productAmount + 1;
      setProductAmount(newProductAmount);
      updateCartItemAmount(id, newProductAmount);
    }
  };

  useEffect(() => {
    setProductAmount(amount || 0);
    setId(productId);
  }, [amount, cart]);

  return (
    <Container buttonSize={buttonSize}>
      <Button
        icon={<Icon name="remove" size={buttonSize || 20} color="white" />}
        buttonStyle={
          buttonSize ? styles.buttonContainerMini : styles.buttonContainer
        }
        onPress={() => decreaseQuantity()}
      />
      <ProductQuantityInput>
        {!productId ? productQuantity : productAmount}
      </ProductQuantityInput>
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
