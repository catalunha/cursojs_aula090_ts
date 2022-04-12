interface TipoNome {
  nome: string;
}
interface TipoSNome {
  snome: string;
}
interface TipoNomeCompleto {
  nomeCompleto(): string;
}
type TipoPessoa = TipoNome & TipoSNome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSNome, TipoNomeCompleto {}

// Todas as formas a seguir sao a mesma coisa
export class Pessoa implements TipoNome, TipoSNome, TipoNomeCompleto {
  constructor(public nome: string, public snome: string) {}
  nomeCompleto(): string {
    return `${this.nome} ${this.snome}`;
  }
}
export class Pessoa2 implements TipoPessoa {
  constructor(public nome: string, public snome: string) {}
  nomeCompleto(): string {
    return `${this.nome} ${this.snome}`;
  }
}
export class Pessoa3 implements TipoPessoa2 {
  constructor(public nome: string, public snome: string) {}
  nomeCompleto(): string {
    return `${this.nome} ${this.snome}`;
  }
}
const pessoa = new Pessoa('Ana', 'Aninha...');
console.log('pessoa.nomeCompleto() = ', pessoa.nomeCompleto());

//merge de interfaces
interface Pessoa4 {
  nome: string;
}
interface Pessoa4 {
  snome: string;
}
interface Pessoa4 {
  readonly enderecos: readonly string[];
}
interface Pessoa4 {
  readonly idade?: number;
}
const pessoa4: Pessoa4 = {
  nome: 'Ana',
  snome: 'Aninha',
  enderecos: ['Av A'],
  idade: 30,
};
// pessoa4.idade=1;// é opcional mas readonly. se tiver nao pode mudar.
// pessoa4.enderecos.push()//nao pode. elementos sao readonly
console.log(pessoa4);
