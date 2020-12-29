let mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectId;

var Canal = new Schema({
  _id: String,
  nome: String, // Midias, ex. Facebook, Instagram, Orkut...});
});

var ClasseEscolaBiblica = new Schema({
  _id: String,
  nome: String,
  caracteristica: String,
});
var Estagio = new Schema({
  _id: String,
  titulo: String, //Ex. VISITANTE | CONGREGADO | MEMBRO...
  nivel: number, //Ex. 1 para visitante, 2 para congregado... quanto maior o numero, maior a precedencia hierarquica});
});
var Familia = new Schema({ _id: String, sobreNome: String });

var Interacao = new Schema({
  _id: String,
  data: Date,
  observacao: String,
  canal: Canal,
});
var PedidoOracao = new Schema({
  _id: String,
  assunto: String,
  observacao: String,
  intercessores: Array,
});
var Congregado = new Schema({
  _id: String,
  familia: Familia,
  posicao: PosicaoCongregado,
  classeEscolaBiblica: ClasseEscolaBiblica,
  celula: Celula,
  interacoes: [Interacao],
  nomeCompleto: String,
  envolvimento: Estagio,
  pedidosOracao: [PedidoOracao],
  telefone: String,
  dataNascimento: Date,
  endereco: String,
  responsavel: Congregado,
  email: String,
  grupo: Grupo,
});
var Grupo = new Schema({
  _id: String,
  nome: String,
  caracteristicas: String,
  responsavel: Congregado,
});
var Celula = new Schema({
  _id: String,
  nome: String,
  caracteristica: String,
  responsavel: Congregado,
  dataInicio: Date,
  dataFim: Date,
});
var User = new Schema({
  _id: String,
  assunto: String,
  observacao: String,
  intercessores: Array,
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
};
