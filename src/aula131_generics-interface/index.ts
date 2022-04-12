interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  snome: T;
  idade: U;
}
const aluno: PessoaProtocolo = {
  nome: 'a',
  snome: 'b',
  idade: 1,
};

console.log(aluno);

interface PessoaProtocolo2<T, U> {
  nome: T;
  snome: T;
  idade: U;
}
const aluno2: PessoaProtocolo2<string, number> = {
  nome: 'a',
  snome: 'b',
  idade: 1,
};

console.log(aluno2);
