function decorandoMetodo(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor,
): any {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);
  console.log('Passei no decorador de metodo');
  return {
    value: function (...args: any[]) {
      return args[0];
    },
  };
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
  @decorandoMetodo
  metodo(msg: string): string {
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
