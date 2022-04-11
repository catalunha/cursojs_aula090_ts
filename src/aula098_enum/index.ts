enum Cores {
  Verde,
  Amarelo,
  Azul,
  Branco,
}

console.log('Cores = ', Cores);
console.log('Cores = ', Cores.Verde);
console.log('Cores = ', Cores[0]);

function escolhaACor(cor: Cores): void {
  console.log('Cores[cor] = ', Cores[cor]);
}
escolhaACor(Cores.Amarelo);

enum Cores2 {
  Verde = 10,
  Amarelo = 200,
  Azul,
  Branco = 'white',
}

console.log('Cores2 = ', Cores2);
console.log('Cores2 = ', Cores2.Verde);
console.log('Cores2 = ', Cores2[10]);
