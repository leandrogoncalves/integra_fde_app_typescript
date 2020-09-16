export interface ISolicitation {
  sloid: string;
  slonumero: string;
  slostatus: string;
  estadoDocumetno: string;
  area_reponsavel: string;
  tipo_objeto: string;
  assunto: string;
  tipo: string;
  motivo: string;
  created_at: string;
  data_formatada: string;
}

export interface ISolicitations {
  [key: string]: ISolicitation[];
}
