import React, { createContext, useState, useContext } from "react";
import { IEcommerceContextData } from "../interfaces/IEcommerceContextData";
import { IProduct } from "../interfaces/IProduct";

const EcommerceContext = createContext<IEcommerceContextData>(
  {} as IEcommerceContextData
);

const EcommerceProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [productDetail, setProductDetail] = useState<IProduct | undefined>();

  return (
    <EcommerceContext.Provider
      value={{
        profile,
        setProfile,
        school,
        setSchool,
        productDetail,
        setProductDetail,
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
