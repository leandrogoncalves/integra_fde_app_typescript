import { ISolicitation } from "./ISolicitation";

export interface ISolicitationContextData {
  solicitationDetail: ISolicitation | undefined;
  setSolicitationDetail: any;
}
