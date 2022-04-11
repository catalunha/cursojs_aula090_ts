//versao 3
// type MapStringsCallback = (item: string) => string;
// function mapStrings(array: string[], callback: MapStringsCallback): string[] {
//   const newArray: string[] = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(callback(array[i]));
//   }
//   return newArray;
// }

// const array1 = ['a', 'b', 'c'];

// const newArray1 = mapStrings(array1, (element) => element.toUpperCase());
// const newArray1 = mapStrings(array1, function (element: string) {
//   return element.toUpperCase();
// });
// console.log('newArray1 = ', newArray1);

//versao 2
function mapStrings(
  array: string[],
  callback: (item: string) => string,
): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

const array1 = ['a', 'b', 'c'];

const newArray1 = mapStrings(array1, (element) => element.toUpperCase());
// const newArray1 = mapStrings(array1, function (element: string) {
//   return element.toUpperCase();
// });
console.log('newArray1 = ', newArray1);

//versao 01
// function mapStrings(array: string[], callback: CallableFunction): string[] {
//   const newArray: string[] = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(callback(array[i]));
//   }
//   return newArray;
// }

// const array1 = ['a', 'b', 'c'];

// const newArray1 = mapStrings(array1, function (element: any) {
//   return element.toUpperCase();
// });
// console.log('newArray1 = ', newArray1);
export default 1;
