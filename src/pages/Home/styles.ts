import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../config/ColorsConfig';
import { Fonts } from '../../config/FontConfig';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${Fonts.RobotoDefault};
  font-size: 30px;
  color: ${Colors.marrom};
  margin-left: 10px
`;

export const Category = styled.View`
  width: 80px;
  height: 80px;
  margin: 10px;

  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const CategoryIcon = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${Colors.marrom};
  width: 50px;
  height: 50px;
  border-radius: 80px
`;

export const CategoryText = styled.Text`
  font-family: ${Fonts.RobotoDefault};
  font-size: 15px;
  color: ${Colors.marrom};
`;


export const styles = StyleSheet.create({
  textContainer: {
      paddingHorizontal: 16,
      paddingBottom: 16,
  },
});
