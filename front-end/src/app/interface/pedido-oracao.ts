import { Congregado } from "./congregado";

export interface PedidoOracao {
  _id: string,
  assunto: string,
  observacao: string,
  congregadosIntercessores: string[]
}
