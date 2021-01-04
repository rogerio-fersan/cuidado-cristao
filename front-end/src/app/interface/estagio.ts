export interface Estagio {
  _id: string,
  titulo: string, //Ex. VISITANTE | CONGREGADO | MEMBRO...
  nivel: number //Ex. 1 para visitante, 2 para congregado... quanto maior o numero, maior a precedencia hierarquica
}
