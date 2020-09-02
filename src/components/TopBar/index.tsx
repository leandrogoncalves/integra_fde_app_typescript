import React from 'react';
import { Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import { Toolbar } from 'react-native-material-ui';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import logoImg from '../../assets/logo_fde_negativo_mini.png';

// import { Container } from './styles';

const TopBar: React.FC = () => {
  const { logout } = useAuth();
  const { navigate } = useNavigation();

  return (
    <Toolbar
      leftElement={
        <TouchableOpacity onPress={() => navigate('Home')}>
          <Image source={logoImg} style={{height:40, width:80}} />
        </TouchableOpacity>
      }
      onLeftElementPress={() => navigate('Home')}
      centerElement={
        <Text style={{color:'white', marginLeft:55, fontSize:20}}>
          Integra FDE
        </Text>
      }
      rightElement={
        <TouchableOpacity onPress={() => logout()}>
          <Ionicons name="exit-outline" color="white" size={25} />
        </TouchableOpacity>
      }
      style={{container: {backgroundColor: '#2f4050' }}}
    />
  );
}

export default TopBar;
