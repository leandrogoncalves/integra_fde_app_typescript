import React, { createContext, useCallback } from 'react';
// import { attemptLogin } from '../services/auth/authService';

interface LoginCredentials {
  user: string;
  pass: string;
}

interface AuthContextData {
  name:string;
  login(credentials:LoginCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const login = useCallback(async ({user, pass}) => {
      console.log('login');
      // const response = await attemptLogin();
  },[]);


  return (
    <AuthContext.Provider value={{name: 'Leandro', login}} >
      {children}
    </AuthContext.Provider>
  )
}
