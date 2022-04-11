// import './form-control';

// console.log('oi');
export function funcao(this: Date, nome: string): void {
  console.log(this);
  console.log(nome);
}
funcao.call(new Date(), 'a');
funcao.apply(new Date(), ['a']);
