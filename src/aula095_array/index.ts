// # 1 - reposição de telhas quebradas em todo telhado
// # 2 - amarração das telhas do beiral
// # 3 - refazer e amarrar o capote
// # 4 - resolver vazamento nas calhas e telhas da oficina
// # 5 - remoção de bloquetes do terreno de 15m² e colocação do lado
// # 6 - mudança das estacas de posição (desmontar, passar ant-cupim e fazer sapata de concreto)
// # 7 - rebaixar o terreno em 50cm na área de 15m² (terra suja vai pra fora terreno ao lado)
// # 8 - colocação de meio fio na area de 15m² (socar bem, com baldrame de concreto)
// # 9 - preencher área rebaixada, 15m², com terra preta de jardim (terra vai estar no lote ao lado)
// # 10 - Regularizar o terreno da area de 15m²
// * pagamento de 1800 via pix no termino de tudo.

// Array<T>
// T[]

function multArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}
function multArgs2(...args: number[]): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

const result = multArgs(1, 2, 3);
console.log('result = ', result);
console.log('multArgs(1,2,3) = ', multArgs2(1, 2, 3));

const array1: readonly string[] = ['a', 'b'];
const array2: ReadonlyArray<string> = ['a', 'b'];
const array3: string[] = ['a', 'b'];

console.log('array1 = ', array1);
console.log('array2 = ', array2);
console.log('array3 = ', array3);
