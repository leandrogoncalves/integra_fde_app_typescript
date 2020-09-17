import React, { createContext, useState, useContext } from "react";
import { ISolicitationContextData } from "../interfaces/ISolicitationContextData";
import { ISolicitation } from "../interfaces/ISolicitations";

const SolicitationContext = createContext<ISolicitationContextData>(
  {} as ISolicitationContextData
);

const SolicitationProvider: React.FC = ({ children }) => {
  const [solicitationDetail, setSolicitationDetail] = useState<
    ISolicitation | undefined
  >();

  return (
    <SolicitationContext.Provider
      value={{
        solicitationDetail,
        setSolicitationDetail,
      }}
    >
      {children}
    </SolicitationContext.Provider>
  );
};

/**
 * Retorna o hook de autenticacao
 */
function useSolicitation(): ISolicitationContextData {
  const context = useContext(SolicitationContext);

  if (!context) {
    throw new Error(
      "useSolicitation must be used within an SolicitationProvider"
    );
  }

  return context;
}

export { SolicitationProvider, useSolicitation };
