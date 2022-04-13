function decorandoParam(
  classPrototype: any,
  nomeMetodo: string | symbol,
  index: number,
): any {
  console.log('+++ Decorando param de um metodo');
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(index);
  console.log('--- Decorando param de um metodo');
}

export class UmaPessoa {
  nome: string;
  snome: string;
  idade: number;
  constructor(nome: string, snome: string, idade: number) {
    this.nome = nome;
    this.snome = snome;
    this.idade = idade;
  }
  metodo(@decorandoParam msg: string): string {
    return `${this.nome} ${this.snome} : ${msg}`;
  }
  get nomeCompleto(): string {
    return `${this.nome} ${this.snome}`;
  }
  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.snome = palavras.join(' ');
  }
}
const pessoa = new UmaPessoa('Ana', 'Aninha...', 20);
console.log(pessoa);
const metodo = pessoa.metodo('Olaaaa');
console.log(metodo);
