type Idade = number;
type MinhaCor = 'Vermelho' | 'Amarelo' | 'Azul';
type Pessoa = {
  nome: string;
  idade: Idade;
  cor: MinhaCor;
};

const pessoa: Pessoa = {
  nome: 'ana',
  idade: 20,
  cor: 'Azul',
};
console.log('pessoa = ', pessoa);

function alterarCor(pessoa: Pessoa, cor: MinhaCor): Pessoa {
  return { ...pessoa, cor: cor };
}
console.log("alterarCor(pessoa,'Vermelho') = ", alterarCor(pessoa, 'Vermelho'));

export default 1;
