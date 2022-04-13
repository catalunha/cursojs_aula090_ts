//Se o tipo de valor nao for igual ao especificado ele reclada
// const obj1: Record<string, string> = {
//   nome: 'Ana',
//   idade: 30,
// };
//normal
type PessoaTiposOpcionais = {
  nome?: string;
  idade?: number;
};
const pessoa: PessoaTiposOpcionais = {
  nome: 'Ana',
};
//mudando para Required
console.log(pessoa);
type PessoaTiposRequeridos = Required<PessoaTiposOpcionais>;
const pessoa2: PessoaTiposRequeridos = {
  nome: 'Ana',
  idade: 10,
};
//mudando para Partial
console.log(pessoa2);
type PessoaTiposOpcionaisDeNovo = Partial<PessoaTiposRequeridos>;
const pessoa3: PessoaTiposOpcionaisDeNovo = {
  nome: 'Ana',
};
console.log(pessoa3);
//mudando para Readonly
type PessoaTiposReadonly = Readonly<PessoaTiposRequeridos>;
const pessoa4: PessoaTiposReadonly = {
  nome: 'Ana',
  idade: 10,
};
console.log(pessoa4);
//mudando para pick. escolhe apenas um dos itens do objetos
type PessoaTiposPick = Pick<PessoaTiposRequeridos, 'nome'>;
const pessoa5: PessoaTiposPick = {
  nome: 'Ana',
  // idade: 10,//nao pode ter no objeto
};
console.log(pessoa5);
// Extract e  Exclude
type Pessoa = {
  nome: string;
  idade: number;
};
type Cliente = {
  setor: string;
  idade: number;
};
type TipoExclude = Exclude<keyof Pessoa, Cliente>;
type TipoExtract = Extract<Pessoa, Cliente>;

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude2 = Exclude<ABC, CDE>;
type TipoExtract2 = Extract<ABC, CDE>;

export default 1;
