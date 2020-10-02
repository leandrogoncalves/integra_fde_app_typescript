import React, { createContext, useState, useContext, useCallback } from "react";

import solicitationService from "../services/solicitationService";

import { ISolicitationContextData } from "../interfaces/ISolicitationContextData";
import { ISolicitation } from "../interfaces/ISolicitations";
import { ISituation } from "../interfaces/ISituation";
import { ISubject } from "../interfaces/ISubject";
import { IType } from "../interfaces/IType";
import { IPeriod } from "../interfaces/IPeriod";
import { ISolicitationFilter } from "../interfaces/ISolicitationFilter";

const SolicitationContext = createContext<ISolicitationContextData>(
  {} as ISolicitationContextData
);

const SolicitationProvider: React.FC = ({ children }) => {
  const [solicitationDetail, setSolicitationDetail] = useState<
    ISolicitation | undefined
  >();
  const [numeroSolicitacao, setNumeroSolicitacao] = useState();
  const [situacao, setSituacao] = useState<ISituation>();
  const [assunto, setAssunto] = useState<ISubject>();
  const [tipo, setTipo] = useState<IType>();
  const [periodo, setPeriodo] = useState<IPeriod>();
  const [loader, setLoader] = useState(true);

  const [solicitations, setSolicitations] = useState<ISolicitation[]>();
  const loadSolicitations = useCallback(async () => {
    const { data } = await solicitationService.getMySolicitations({
      numeroSolicitacao,
      situacao,
      assunto,
      periodo,
      tipo,
    } as ISolicitationFilter);
    setSolicitations(data);
    setLoader(false);
  }, [
    solicitations,
    loader,
    numeroSolicitacao,
    situacao,
    assunto,
    periodo,
    tipo,
  ]);

  return (
    <SolicitationContext.Provider
      value={{
        solicitationDetail,
        setSolicitationDetail,
        numeroSolicitacao,
        setNumeroSolicitacao,
        situacao,
        setSituacao,
        assunto,
        setAssunto,
        tipo,
        setTipo,
        periodo,
        setPeriodo,
        loader,
        setLoader,
        solicitations,
        setSolicitations,
        loadSolicitations,
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
