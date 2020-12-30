import { PerfilUsuario } from "../enum/perfil-usuario.enum";
import { UserMidia } from "./user-midia";

export interface User {
   nome: string,
  dataCadastro: Date,
  cpf: string,
  profissoes: string[],
  telefones: string[],
  email: string,
  userMidia: UserMidia[],
  senha: string,
  confirmaSenha: string,
  perfil: PerfilUsuario,
  validationToken: string,
  validationStatus: string,
  associado: boolean,
  tries: number,
  gravatarUrl: string
}
