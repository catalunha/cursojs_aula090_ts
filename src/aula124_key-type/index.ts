type CoresValue = typeof coresObj;
type CoresKey = keyof CoresValue;
const coresObj = {
  vermelho: 'red',
};
function traduzir(cor: CoresKey, cores: CoresValue) {
  return cores[cor];
}
console.log(traduzir('vermelho', coresObj));
