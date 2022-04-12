type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];
const animal = {
  cor: 'azul',
  vacinas: ['a', 'b'],
};
const vacinas = obterChave(animal, 'vacinas');

console.log(vacinas);
