export function myIsNumber(value: unknown): value is number {
  return typeof value === 'number';
}
console.log(myIsNumber('123'));
console.log(myIsNumber(123));

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, valor) => {
    if (myIsNumber(sum) && myIsNumber(valor)) {
      return sum + valor;
    }
    return sum;
  }, 0);
  return retorno;
}
console.log(soma(1, 2, 3));
