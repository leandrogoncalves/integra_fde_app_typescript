import styled from "styled-components/native";
import { Fonts } from "../../../config/FontConfig";
import { Colors } from "../../../config/ColorsConfig";

export const ListTitle = styled.Text`
  font-family: ${Fonts.family.bold};
  color: #3b3b3b;
  font-size: 19px;
`;

export const ListText = styled.Text`
  font-family: ${Fonts.family.default};
  color: #1d1d1d;
  font-size: 19px;
`;

export const GoToOrder = styled.TouchableOpacity`
  width: 93%;
  height: 50px;
  background-color: ${Colors.button.primary};

  justify-content: center;
  align-items: center;
  flex-direction: row;

  border-radius: 10px;
  margin-top: 8px;
  margin-left: 15px;
  margin-bottom: 10px;
`;

export const GoToOrderText = styled.Text`
  font-family: ${Fonts.family.bold};
  color: white;
  font-size: 20px;
`;
