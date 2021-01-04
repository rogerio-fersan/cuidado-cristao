import { Canal } from "./canal";

export interface Interacao {
  _id: string,
  data: Date,
  observacao: string,
  canal_id: string
}
