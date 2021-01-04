import { PosicaoCongregado } from "../enum/posicao-congregado.enum";
import { Celula } from "./celula";
import { ClasseEscolaBiblica } from "./classe-escola-biblica";
import { Estagio } from "./estagio";
import { Familia } from "./familia";
import { Grupo } from "./grupo";
import { Interacao } from "./interacao";
import { PedidoOracao } from "./pedido-oracao";

/*
nome_id: string armazena o ObjectId da relacao
*/
export interface Congregado {
  _id: string,
  familia: Familia,
  posicao_id: string,
  classeEscolaBiblica_id: string,
  celula_id: string,
  interacoes: string[],
  nomeCompleto: string,
  estagio_id: string,
  pedidosOracao: string[],
  telefone: string,
  dataNascimento: Date,
  endereco: string,
  responsavel_id: string,
  email: string,
  grupo_id: string,
  user_id: string
}
