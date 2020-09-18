import styled from "styled-components/native";
import { Colors } from "../../../config/ColorsConfig";
import { Fonts } from "../../../config/FontConfig";

export const Family = styled.View`
  width: 80px;
  height: 90px;
  margin: 10px;

  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const FamilyIcon = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${Colors.highlight.primary};
  width: 50px;
  height: 50px;
  border-radius: 80px;
  margin-bottom: 5px;
`;

export const FamilyText = styled.Text`
  font-family: ${Fonts.family.default};
  font-size: 12px;
  color: ${Colors.highlight.primary};
  text-align: center;
`;
