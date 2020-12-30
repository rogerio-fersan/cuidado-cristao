const { ObjectID } = require("mongodb");
let mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const Canal = new Schema({
  _id: String,
  nome: String, // Midias, ex. Facebook, Instagram, Orkut...});
});

const ClasseEscolaBiblica = new Schema({
  _id: String,
  nome: String,
  caracteristica: String,
});
const Estagio = new Schema({
  _id: String,
  titulo: String, //Ex. VISITANTE | CONGREGADO | MEMBRO...
  nivel: Number, //Ex. 1 para visitante, 2 para congregado... quanto maior o numero, maior a precedencia hierarquica});
});
const Familia = new Schema({ _id: String, sobreNome: String });

const Interacao = new Schema({
  _id: String,
  data: Date,
  observacao: String,
  canal: Canal,
});
const PedidoOracao = new Schema({
  _id: String,
  assunto: String,
  observacao: String,
  intercessores: Array,
});

const Celula = new Schema({
  _id: String,
  nome: String,
  caracteristica: String,
  responsavel: ObjectID, // Congregado
  dataInicio: Date,
  dataFim: Date,
});
/**
 * PosicaoCongregado =
  | "PATRIARCA"
  | "MATRIARCA"
  | "FILHO(A)"
  | "NETO(A)"
  | "BISNETO(A)"
  | "ACOLHIDO(A)";
*/
const Congregado = new Schema({
  _id: String,
  familia: Familia,
  posicao: String,
  classeEscolaBiblica: ClasseEscolaBiblica,
  celula: Celula,
  interacoes: [Interacao],
  nomeCompleto: String,
  envolvimento: Estagio,
  pedidosOracao: [PedidoOracao],
  telefone: String,
  dataNascimento: Date,
  endereco: String,
  responsavel: ObjectID,
  email: String,
  grupo: {
    _id: String,
    nome: String,
    caracteristicas: String,
    responsavel: ObjectID,
  },
});
const Grupo = new Schema({
  _id: String,
  nome: String,
  caracteristicas: String,
  responsavel: Congregado,
});

const UserMidia = new Schema({
  _id: String,
  canal: Canal,
  link: String,
});

/*
export type PerfilUsuario = 'ADMIN' | 'MODERATOR' | 'USER';
 */

const User = new Schema({
  nome: String,
  dataCadastro: Date,
  cpf: String,
  profissoes: [String],
  telefones: [String],
  email: String,
  userMidia: [UserMidia],
  senha: String,
  confirmaSenha: String,
  perfil: String,
  validationToken: String,
  validationStatus: String,
  associado: Boolean,
  tries: Number,
  gravatarUrl: String,
});

module.exports = {
  Canal,
  Celula,
  ClasseEscolaBiblica,
  Congregado,
  Estagio,
  Familia,
  Grupo,
  Interacao,
  PedidoOracao,
  User,
};
