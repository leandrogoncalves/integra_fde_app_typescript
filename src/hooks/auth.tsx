import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext
 } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import authService from '../services/auth/authService';

interface AuthState {
  token: string;
  user: object;
}

interface LoginCredentials {
  usuario: string;
  senha: string;
}

interface AuthContextData {
  user:object;
  loading: boolean;
  login(credentials:LoginCredentials): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  /**
   * Seta o estado inicial da autenticacao
   */
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  /**
   * Lança um evento assim que o componente for renderizado
   */
  useEffect(() =>{
    async function loadStorageData():Promise<void> {
      const [token,user] = await AsyncStorage.multiGet([
        '@Integra:token',
        '@Integra:user'
      ]);

      if (token[1] && user[1]) {
        setData({token: token[1], user: JSON.parse(user[1])});
        // return { token, user: JSON.parse(user)};
      }

      setLoading(false);
    }

    loadStorageData();
  },[]);

  /**
   * Metodo de login
   */
  const login = useCallback(async ({usuario, senha}) => {

    const response = await authService.login(usuario, senha);

    const {access_token, user} = response;

    await AsyncStorage.multiSet([
      ['@Integra:token', access_token],
      ['@Integra:user', JSON.stringify(user)]
    ]);

    setData({token: access_token, user: user});



  },[]);

  /**
   * Metodo de logout
   */
  const logout = useCallback(async () => {
    // const navigation = useNavigation();
    await AsyncStorage.multiRemove([
      '@Integra:token',
      '@Integra:user'
    ]);

    setData({} as AuthState);

    // navigation.navigate('Login');
  },[])


  return (
    <AuthContext.Provider value={{user: data.user, loading,  login, logout}} >
      {children}
    </AuthContext.Provider>
  )
}

/**
 * Retorna o hook de autenticacao
 */
function useAuth():AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an authProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
