import React from "react";
import { View } from "react-native";
import { Container } from "../../../components/Layout/Container";
import TopBar from "../../../components/Layout/TopBar";
import { Title } from "../../../components/Typography/Title";

const Favoritos: React.FC = () => {
  return (
    <Container>
      <TopBar title="Favoritos" />
      <Title>Favoritos</Title>
    </Container>
  );
};

export default Favoritos;
