type Veiculo = {
  marca: string;
  ano: string;
};
type Car = {
  brand: string;
  year: Veiculo['ano'];
};
const carro: Car = {
  brand: 'Ford',
  year: '2020',
};
console.log(carro);
