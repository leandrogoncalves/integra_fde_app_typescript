import styled from "styled-components/native";
import { Fonts } from "../../../config/FontConfig";
import { Colors } from "../../../config/ColorsConfig";

export const ListTitle = styled.Text`
  font-family: ${Fonts.family.bold};
  color: #3b3b3b;
  font-size: 17px;
`;

export const ListText = styled.Text`
  font-family: ${Fonts.family.default};
  color: #3b3b3b;
  font-size: 15px;
`;
