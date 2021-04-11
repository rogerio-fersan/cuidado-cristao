import { PerfilUsuario } from "../enum/perfil-usuario.enum";
import { UserMidia } from "./user-midia";

/* atributo_id corresponde ao ObjectId da relacao */
export interface User {
  _id: string,
  nome: string,
  dataCadastro: Date,
  cpf: string,
  profissoes: string[],
  telefones: string[],
  email: string,
  userMidias: string[],
  senha: string,
  confirmaSenha: string,
  perfil: PerfilUsuario,
  validationToken: string,
  validationStatus: string,
  associado: boolean,
  tries: number,
  gravatarUrl: string,
  congregado_id: string
}
