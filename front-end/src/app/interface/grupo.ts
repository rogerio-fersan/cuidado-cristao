import { Congregado } from "./congregado";

export interface Grupo {
  _id: string,
  nome: string,
  caracteristicas: string,
  responsavel: Congregado
}
