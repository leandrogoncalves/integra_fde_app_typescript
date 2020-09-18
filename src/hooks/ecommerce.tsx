import React, { createContext, useState, useContext } from "react";
import { IEcommerceContextData } from "../interfaces/IEcommerceContextData";
import { IProduct } from "../interfaces/IProduct";
import { IProfile } from "../interfaces/IProfiles";
import { ISchool } from "../interfaces/ISchools";

const EcommerceContext = createContext<IEcommerceContextData>(
  {} as IEcommerceContextData
);

const EcommerceProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState<IProfile | undefined>({} as IProfile);
  const [school, setSchool] = useState<ISchool | undefined>({} as ISchool);
  const [productDetail, setProductDetail] = useState<IProduct | undefined>();
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [initialBalance, setInitialBalance] = useState<number>(2000);
  const [totalBalance, setTotalBalance] = useState<number>(2000);

  return (
    <EcommerceContext.Provider
      value={{
        profile,
        setProfile,
        school,
        setSchool,
        productDetail,
        setProductDetail,
        productQuantity,
        setProductQuantity,
        initialBalance,
        totalBalance,
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
