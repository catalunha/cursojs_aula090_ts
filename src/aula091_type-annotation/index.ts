/* eslint-disable */
let texto : string = 'ana';
let numero : number = 30;//10 | 1.5 | -5.5 | 0xf00d | 0o7744
let booleano : boolean = true;
let simbolo : symbol = Symbol('qq-symbol');
// let grandeinteiro:bigint = 10n;
// array e objetos sao passados como referencia
// array
let arrayDeNumeros : Array<number>=[1,2,3];
let arrayDeNumeros2 : number[] =[1,2,3];
let arrayDeTextos : Array<string>=['a','b'];
let arrayDeTextos2 : string[] =['a','b'];
//objetos
let pessoa: {
  nome: string,
  idade:number,
  adulto?:boolean,//adulto é opcional
}={
nome:'ana',
idade:20,
adulto:true,
}

console.log('pessoa = ',pessoa.nome);

function soma(x:number,y:number): number{
  return x+y;
}
const soma1 = soma(2,2);
//construindo funcao de outra forma
const soma2: (x:number,y:number)=>number = (x,y)=> x+y;
const soma3: (x:number,y:number)=>number = function (x,y){ return x+y};


function recebe(a:string[]):number{
return 10;
}
