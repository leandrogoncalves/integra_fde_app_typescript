import { IPeriod } from "./IPeriod";
import { ISituation } from "./ISituation";
import { ISolicitation } from "./ISolicitation";
import { ISubject } from "./ISubject";
import { IType } from "./IType";

export interface ISolicitationContextData {
  solicitationDetail: ISolicitation | undefined;
  setSolicitationDetail(): ISolicitation | undefined;
  numeroSolicitacao: string | undefined;
  setNumeroSolicitacao(): string | undefined;
  situacao: ISituation | undefined;
  setSituacao(): ISituation | undefined;
  assunto: ISubject | undefined;
  setAssunto(): ISubject | undefined;
  tipo: IType | undefined;
  setTipo(): IType | undefined;
  periodo: IPeriod | undefined;
  setPeriodo(): IPeriod | undefined;
  loader: boolean;
  setLoader(): boolean;
  solicitations: ISolicitation[] | undefined;
  setSolicitations(): ISolicitation[] | undefined;
  loadSolicitations(): ISolicitation[] | [];
}
