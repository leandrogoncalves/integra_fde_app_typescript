import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card, ListItem } from 'react-native-material-ui';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import TopBar from '../../components/TopBar';

import {
  Container,
  Title,
  styles,
  Category,
  CategoryIcon,
  CategoryText
} from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container >
      <TopBar />
      <ScrollView
          keyboardShouldPersistTaps="handled"
        >
        <Card >

          <Title>
            Categorias
          </Title>

          <ScrollView horizontal={true}>

            <TouchableOpacity onPress={() => navigate('Busca')}>
              <Category>
                <CategoryIcon>
                  <MaterialCommunityIcons name='chair-rolling' color="white" size={30} />
                </CategoryIcon>
                <CategoryText>
                  Mobiliário
                </CategoryText>
              </Category>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Busca')}>
              <Category>
                <CategoryIcon>
                  <MaterialCommunityIcons name='chair-rolling' color="white" size={30} />
                </CategoryIcon>
                <CategoryText>
                  Mobiliário
                </CategoryText>
              </Category>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Busca')}>
              <Category>
                <CategoryIcon>
                  <MaterialCommunityIcons name='chair-rolling' color="white" size={30} />
                </CategoryIcon>
                <CategoryText>
                  Mobiliário
                </CategoryText>
              </Category>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Busca')}>
              <Category>
                <CategoryIcon>
                  <MaterialCommunityIcons name='chair-rolling' color="white" size={30} />
                </CategoryIcon>
                <CategoryText>
                  Mobiliário
                </CategoryText>
              </Category>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Busca')}>
              <Category>
                <CategoryIcon>
                  <MaterialCommunityIcons name='chair-rolling' color="white" size={30} />
                </CategoryIcon>
                <CategoryText>
                  Mobiliário
                </CategoryText>
              </Category>
            </TouchableOpacity>

          </ScrollView>
        </Card>

        <Card >

          <Title>
            Produtos em destaque
          </Title>

          <ListItem
            leftElement={<Avatar text="JM" />}
            centerElement={{
                primaryText: 'John Mitri',
                secondaryText: '3 weeks ago',
            }}
          />
          <View style={styles.textContainer}>
            <Text>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo.
            </Text>
          </View>
        </Card>

      </ScrollView>
    </Container>
  );
}

export default Home;
