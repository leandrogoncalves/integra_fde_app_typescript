import React, { createContext, useState, useContext } from "react";
import { IEcommerceContextData } from "../interfaces/IEcommerceContextData";

const EcommerceContext = createContext<IEcommerceContextData>(
  {} as IEcommerceContextData
);

const EcommerceProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState<string>("");
  const [school, setSchool] = useState<string>("");

  return (
    <EcommerceContext.Provider
      value={{
        profile,
        setProfile,
        school,
        setSchool,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};

/**
 * Retorna o hook de autenticacao
 */
function useEcommerce(): IEcommerceContextData {
  const context = useContext(EcommerceContext);

  if (!context) {
    throw new Error("useEcommerce must be used within an EcommerceProvider");
  }

  return context;
}

export { EcommerceProvider, useEcommerce };
