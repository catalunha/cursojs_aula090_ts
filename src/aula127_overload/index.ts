// type Adder = (x: number) => number;
type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};
const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};
adder(1);
console.log('adder(1) = ', adder(1));
