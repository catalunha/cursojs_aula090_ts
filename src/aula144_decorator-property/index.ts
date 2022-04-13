function decorandoProperty(classPrototype: any, nome: string | symbol): any {
  console.log('+++ Decorando property de uma classe');
  console.log(classPrototype);
  console.log(nome);
  // console.log(index);
  console.log('--- Decorando property de uma classe');
  let novoValorProperty: any;
  return {
    get: () => novoValorProperty,
    set: (valor: any) => {
      novoValorProperty = valor.split('').reverse().join('');
    },
  };
}

export class UmaPessoa {
  @decorandoProperty
  nome: string;
  @decorandoProperty
  snome: string;
  idade: number;
  constructor(nome: string, snome: string, idade: number) {
    this.nome = nome;
    this.snome = snome;
    this.idade = idade;
  }
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
