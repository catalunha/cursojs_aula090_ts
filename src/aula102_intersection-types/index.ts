type TemNome = { nome: string };
type TemIdade = { idade: number };
type Pessoa1 = TemNome | TemIdade;
type Pessoa2 = TemNome & TemIdade;

const pessoa1a: Pessoa1 = {
  nome: 'Ana',
};
console.log('pessoa1a = ', pessoa1a);
const pessoa1b: Pessoa1 = {
  nome: 'Ana',
  idade: 30,
};
console.log('pessoa1b = ', pessoa1b);
const pessoa2a: Pessoa2 = {
  nome: 'Ana',
  idade: 30,
};
console.log('pessoa2a = ', pessoa2a);

//module mode
export default 1;
