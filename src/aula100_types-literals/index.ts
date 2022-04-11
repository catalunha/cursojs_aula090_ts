/* eslint-disable */
let x=10;
const y=10;
let a:120=120; // é igual a uma constante mas um mal codigo
let b=100 as const;//transforma let em constante

const pessoa ={
  nome: 'Ana' as const,
  cracha: 'Aninha'
}
// pessoa.nome='Anaa';//reclama pois nome é constante
function escolhaCor(cor: 'Vermelho'|'Amarelo' | 'Azul'):string {
  return cor;
}
// console.log("escolhaCor('Branco) = ",escolhaCor('Branco'));//reclama
console.log("escolhaCor('Branco) = ",escolhaCor('Azul'));//reclama


export default 1;
