import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import authService from "../services/authService";
import { IAuthState } from "../interfaces/IAuthState";
import { IAuthContextData } from "../interfaces/IAuthContextData";

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  /**
   * Seta o estado inicial da autenticacao
   */
  const [data, setData] = useState<IAuthState>({} as IAuthState);
  const [loading, setLoading] = useState(true);

  /**
   * Lança um evento assim que o componente for renderizado
   */
  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        "@Integra:token",
        "@Integra:user",
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
        // return { token, user: JSON.parse(user)};
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  /**
   * Metodo de login
   */
  const login = useCallback(async ({ usuario, senha }) => {
    const response = await authService.login(usuario, senha);

    const { access_token, user } = response;

    await AsyncStorage.multiSet([
      ["@Integra:token", access_token],
      ["@Integra:user", JSON.stringify(user)],
    ]);

    setData({ token: access_token, user });
  }, []);

  /**
   * Metodo de logout
   */
  const logout = useCallback(async () => {
    // const navigation = useNavigation();
    await AsyncStorage.multiRemove(["@Integra:token", "@Integra:user"]);

    setData({} as IAuthState);

    // navigation.navigate('Login');
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Retorna o hook de autenticacao
 */
function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an authProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
