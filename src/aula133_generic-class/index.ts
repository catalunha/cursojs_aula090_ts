export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

const pessoa1 = new Pessoa('a', 1);

///Criando uma pilha

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};
  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }
  pop(): T | void {
    if (this.estaVazia()) return undefined;
    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }
  estaVazia(): boolean {
    return this.contador === 0;
  }
  tamanho(): number {
    return this.contador;
  }
  mostrarPilha(): void {
    for (const chave in this.elementos) {
      const element = this.elementos[chave];
      console.log(element);
    }
  }
}

const pilha = new Pilha<number>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.mostrarPilha();
