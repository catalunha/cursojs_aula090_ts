let x;
console.log('typeof x = ', typeof x);
if (typeof x === 'undefined') console.log('var é undefined');

//>>> -> indica saida no console
//>>>typeof x =  undefined

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return { firstName, lastName };
}

export function createPerson2(
  nome: string,
  idade: number,
  adulto?: boolean,
): {
  nome: string;
  idade: number;
  adulto?: boolean;
} {
  return {
    nome,
    idade,
    adulto, //adulto é opcional
  };
}
export function createPerson3(
  nome: string,
  idade: number,
  adulto?: boolean,
): string {
  return `${nome}-${idade}-${adulto}-`;
}
const pessoa: {
  nome: string;
  idade: number;
  adulto?: boolean; //adulto é opcional
} = {
  nome: 'ana',
  idade: 20,
  adulto: true,
};
createPerson2(pessoa.nome, pessoa.idade, pessoa.adulto);
createPerson3(pessoa.nome, pessoa.idade, pessoa.adulto);

// function criaErro() {
//   throw new Error('criando erro');
// }
// criaErro();

let a: unknown;
a = 'a';
a = 10;
const b = 20;
// console.log(a + b); //avisa ao calcular sem ver tipo
if (typeof a === 'number') console.log(a + b);
