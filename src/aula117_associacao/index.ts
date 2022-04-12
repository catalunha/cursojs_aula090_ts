export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}
  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }
  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }
  get nome(): string {
    return this._nome;
  }
  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Nao posso escrever sem ferramenta');
      return;
    } else {
      this.ferramenta.escrever();
    }
  }
}
export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;
  get nome(): string {
    return this._nome;
  }
}
export class Manual extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta escrevendo...`);
  }
}
export class Teclado extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta digitando...`);
  }
}

const escritor = new Escritor('Ana');
const caneta = new Manual('Bic');
const teclado = new Teclado('logitec');
console.log(escritor.nome);
console.log(caneta.nome);
console.log(teclado.nome);
escritor.escrever();
escritor.ferramenta = caneta;
escritor.escrever();
escritor.ferramenta = teclado;
escritor.escrever();
