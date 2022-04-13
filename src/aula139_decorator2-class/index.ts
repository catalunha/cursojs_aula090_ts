// console.log('# class Animal alterada por @NomeDoDecoratorDaClasse');
@decoratorInvertCor
export class Animal {
  constructor(public cor: string) {
    console.log('classe Animal...');
  }
}

// const animal = new Animal('azul');

// console.log(animal);

// console.log('# decoratorInvertCor');
function decoratorInvertCor<T extends new (...args: any[]) => any>(
  target: T,
): T {
  console.log('decorator Animal...');
  return class extends target {
    cor: string;
    constructor(...args: any[]) {
      super(...args);
      this.cor = args[0].split('').reverse().join('');
    }
  };
}
// const animal2 = new Animal('vermelho');
// console.log(animal2);
export default 1;
