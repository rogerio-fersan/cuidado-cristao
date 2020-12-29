import { Congregado } from "./congregado";

export interface Celula {
  _id: string,
  nome: string,
  caracteristica: string,
  responsavel: Congregado,
  dataInicio: Date,
  dataFim: Date
}
