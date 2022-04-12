//com tipo generico
type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;
function meuFilter2<T>(array: T[], callback: FilterCallback<T>): T[] {
  const novoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      novoArray.push(array[i]);
    }
  }
  return novoArray;
}
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(meuFilter2(array2, (value) => value < 5));

//sem definir tipo
//Assim
// function meuFilter1(
//   array: unknown[],
//   callback: (value: unknown, index?: number, array?: unknown[]) => boolean,
// );
//Ou assim
// type FilterCallback = (
//   value: unknown,
//   index?: number,
//   array?: unknown[],
// ) => boolean;
// function meuFilter2(array: unknown[], callback: FilterCallback): unknown {
//   const novoArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i])) {
//       novoArray.push(array[i]);
//     }
//   }
//   return novoArray;
// }
// const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(
//   meuFilter2(array2, (value) => {
//     if (typeof value === 'number') return value < 5;
//     return false;
//   }),
// );

//filter do ts
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.filter((value) => value < 5));

export default 1;
