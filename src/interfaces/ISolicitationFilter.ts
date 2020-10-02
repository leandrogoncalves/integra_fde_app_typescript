import { IPeriod } from "./IPeriod";
import { ISituation } from "./ISituation";
import { ISubject } from "./ISubject";
import { IType } from "./IType";

export interface ISolicitationFilter {
  numeroSolicitacao: number | undefined;
  situacao: ISituation | undefined;
  assunto: ISubject | undefined;
  periodo: IPeriod | undefined;
  tipo: IType | undefined;
}
