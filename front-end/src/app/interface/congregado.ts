import { PosicaoCongregado } from "../enum/posicao-congregado.enum";
import { Celula } from "./celula";
import { ClasseEscolaBiblica } from "./classe-escola-biblica";
import { Estagio } from "./estagio";
import { Familia } from "./familia";
import { Grupo } from "./grupo";
import { Interacao } from "./interacao";
import { PedidoOracao } from "./pedido-oracao";
export interface Congregado {
  _id: string,
  familia: Familia,
  posicao: PosicaoCongregado,
  classeEscolaBiblica: ClasseEscolaBiblica,
  celula: Celula,
  interacoes: Interacao[],
  nomeCompleto: string,
  envolvimento: Estagio,
  pedidosOracao: PedidoOracao[],
  telefone: string,
  dataNascimento: Date,
  endereco: string,
  responsavel: Congregado,
  email: string,
  grupo: Grupo
}
