import React from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import { Toolbar } from 'react-native-material-ui';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import logoImg from '../../assets/logo_fde_negativo_mini.png';


const TopBar: React.FC = ({
  iconBack,
  title,
  titleMarginLeft,
  iconExit,
  iconCart,
  iconSearch,
}) => {
  const { logout } = useAuth();
  const { navigate, goBack, dispatch } = useNavigation();

  return (
    <Toolbar
      leftElement={
        <View style={{flexDirection:"row", justifyContent:"center", alignContent:'center'}}>
          {iconBack
            ? (
              <>
                <TouchableOpacity onPress={() => goBack()}>
                  <Ionicons name="arrow-back-sharp" size={30} color="white"/>
                </TouchableOpacity>
              </>
            ):(
              <TouchableOpacity onPress={() => navigate('Home')}>
                <Image source={logoImg} style={{height:40, width:80}} />
              </TouchableOpacity>
            )}
        </View>
      }
      onLeftElementPress={() => navigate('Home')}
      centerElement={
        <Text style={{color:'white', marginLeft:titleMarginLeft, fontSize:20}}>
          {title}
        </Text>
      }
      rightElement={
        <>
          {iconExit
            ? (
              <TouchableOpacity onPress={() => logout()}>
                <Ionicons name="exit-outline" color="white" size={25} />
              </TouchableOpacity>
            )
            : (<></>)
          }
          {iconCart
            ? (
              <TouchableOpacity onPress={() => navigate('Pedidos')}>
                <MaterialCommunityIcons name="cart" size={24} color="white" />
              </TouchableOpacity>
            )
            : (<></>)
          }
          {iconSearch
            ? (
              <TouchableOpacity onPress={() => navigate('HistoricoBusca')}>
                <Ionicons name="search" size={24} color="white" />
              </TouchableOpacity>
            )
            : (<></>)
          }
        </>
      }
      style={{container: {backgroundColor: '#2f4050' }}}
    />
  );
}

export default TopBar;
