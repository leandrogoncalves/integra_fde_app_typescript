import { ISituation } from "./ISituation";
import { ISolicitation } from "./ISolicitation";
import { ISubject } from "./ISubject";

export interface ISolicitationContextData {
  solicitationDetail: ISolicitation | undefined;
  setSolicitationDetail(): ISolicitation | undefined;
  numeroSolicitacao: string | undefined;
  setNumeroSolicitacao(): string | undefined;
  situacao: ISituation | undefined;
  setSituacao(): ISituation | undefined;
  assunto: ISubject | undefined;
  setAssunto(): ISubject | undefined;
}
