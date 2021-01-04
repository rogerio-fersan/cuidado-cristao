import { Congregado } from "./congregado";

export interface Celula {
  _id: string,
  nome: string,
  caracteristica: string,
  responsavel_id: string,
  dataInicio: Date,
  dataFim: Date
}
