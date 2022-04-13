// type Constructor = new (...args: any[]) => any;
interface Constructor {
  new (...args: any[]): any;
}
@decoratorInvertCor('Valor1', 'Valor2')
@outroDecorador
export class Animal {
  constructor(public cor: string) {
    console.log('classe Animal...');
  }
}

function decoratorInvertCor(param1: string, param2: string) {
  return function (target: Constructor) {
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
function outroDecorador(target: Constructor) {
  console.log('outroDecorador');
  return target;
}

const animal2 = new Animal('vermelho');
console.log(animal2);
export default 1;
