import React, { createContext, useCallback, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import authService from '../services/auth/authService';

interface AuthState {
  token: string;
  user: object;
}

interface LoginCredentials {
  user: string;
  pass: string;
}

interface AuthContextData {
  name:string;
  login(credentials:LoginCredentials): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  /**
   * Seta o estado inicial da autenticacao
   */
  const [data, setData] = useState<AuthState>({} as AuthState);

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

      // return {} as AuthState;
    }

    loadStorageData();
  },[]);

  /**
   * Metodo de login
   */
  const login = useCallback(async ({user, pass}) => {
    console.log('login');
    const response = await authService.login(user, pass);

    const {token, usuario} = response.data;

    await AsyncStorage.multiSet([
      ['@Integra:token', token],
      ['@Integra:user', JSON.stringify(usuario)]
    ]);

    setData({token, user: JSON.parse(usuario)});

  },[]);

  /**
   * Metodo de logout
   */
  const Logout = useCallback(async () => {
    await AsyncStorage.multiRemove([
      '@Integra:token',
      '@Integra:user'
    ]);

    setData({} as AuthState);
  },[])


  return (
    <AuthContext.Provider value={{name: 'Leandro', login, Logout}} >
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
