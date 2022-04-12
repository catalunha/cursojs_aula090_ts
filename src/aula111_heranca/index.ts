// https://www.yworks.com/yed-live/

export class Pessoa {
  constructor(
    public nome: string,
    public snome: string,
    private idade: number,
    protected cpf: string,
  ) {}
  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return `${this.nome} ${this.snome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    snome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, snome, idade, cpf);
  }
  getNomeCompleto(): string {
    return `Aluno: ${super.getNomeCompleto()}`;
  }
}
export class Cliente extends Pessoa {
  setor: string;
  constructor(
    nome: string,
    snome: string,
    idade: number,
    cpf: string,
    setor: string,
  ) {
    super(nome, snome, idade, cpf);
    this.setor = setor;
  }
  getNomeCompleto(): string {
    return `Cliente: ${this.nome} ${this.snome}`;
  }
}

const pessoa = new Pessoa('Ana', 'Aninha', 20, '123.456.789-12');
const aluno = new Aluno('Ana', 'Aninha', 20, '123.456.789-12', 'Sala1');
const alunoPessoa = new Pessoa('Ana', 'Aninha', 20, '123.456.789-12');
const cliente = new Cliente('Ana', 'Aninha', 20, '123.456.789-12', 'Oficina');
const clientePessoa = new Pessoa('Ana', 'Aninha', 20, '123.456.789-12');
console.log('pessoa = ', pessoa);
console.log('aluno = ', aluno);
console.log('alunoPessoa = ', alunoPessoa);
console.log('cliente = ', cliente);
console.log('clientePessoa = ', clientePessoa);
console.log('pessoa = ', pessoa.getNomeCompleto());
console.log('aluno = ', aluno.getNomeCompleto());
