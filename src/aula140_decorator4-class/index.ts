@decoratorInvertCor('Valor1', 'Valor2')
export class Animal {
  constructor(public cor: string) {
    console.log('classe Animal...');
  }
}
function decoratorInvertCor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log('decorator Animal...');
    return class extends target {
      cor: string;
      constructor(...args: any[]) {
        super(...args);
        this.cor = args[0].split('').reverse().join('') + param1 + param2;
      }
    };
  };
}

const animal2 = new Animal('vermelho');
console.log(animal2);
export default 1;
