// carro e rodas.
//rodas esta agregado a carro
export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];
  inserirProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }
  quantidadeDeProdutos(): number {
    return this.produtos.length;
  }
  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}
const produto1 = new Produto('Camisa', 10);
const produto2 = new Produto('Calça', 20);
const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProduto(produto1, produto2);

console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.quantidadeDeProdutos());
console.log(carrinhoDeCompras.valorTotal());
