console.log('# animal @NomeDoDecoratorDaClasse');
@decorator
export class Animal {
  constructor(public cor: string) {}
}

const animal = new Animal('azul');

console.log(animal);

console.log('# decorator');
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;
    constructor(...args: any[]) {
      super(...args);
      this.cor = args[0].split('').reverse().join('');
    }
  };
}
const animal2 = new Animal('vermelho');
console.log(animal2);

//sem @decorator
// console.log('# animal');
// export class Animal {
//   constructor(public cor: string) {}
// }

// const animal = new Animal('azul');

// console.log(animal);

// console.log('# decorator');
// function decorator<T extends new (...args: any[]) => any>(target: T): T {
//   return class extends target {
//     cor: string;
//     constructor(...args: any[]) {
//       super(...args);
//       this.cor = args[0].split('').reverse().join('');
//     }
//   };
// }
// const animalDecorator = decorator(Animal);
// const animal2 = new animalDecorator('vermelho');
// console.log(animal2);

//situação básica
// export class Animal {
//   constructor(public cor: string) {}
// }

// const animal = new Animal('azul');
// console.log(animal);

// function decorator(target: any): any {
//   return target;
// }
// const animalDecorator = decorator(Animal);
// const animal2 = new animalDecorator('vermelho');
// console.log(animal2);

export default 1;
