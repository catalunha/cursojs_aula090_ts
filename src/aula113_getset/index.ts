export class Pessoa {
  constructor(
    public nome: string,
    public snome: string,
    private idade: number,
    private _cpf: string,
  ) {}
  // modo novo. mas com problemas
  get cpf(): string {
    return this._cpf.replace(/[^0-9]/g, '');
  }
  set cpf(cpf: string) {
    this._cpf = cpf;
  }
}
const pessoa = new Pessoa('Ana', 'Aninha...', 20, '123.456.789-11');
console.log('pessoa.getCpf() = ', pessoa.cpf);
pessoa.cpf = '111.111.111-11';
console.log('pessoa.getCpf() = ', pessoa.cpf);

//modo antigo
// export class Pessoa {
//   constructor(
//     public nome: string,
//     public snome: string,
//     private idade: number,
//     private _cpf: string,
//   ) {}
//   modo antigo
//   getCpf(): string {
//     return this.cpf.replace(/[^0-9]/g, '');
//   }
//   setCpf(cpf: string): void {
//     this.cpf = cpf;
//   }
//   modo novo. mas com problemas

// }
// const pessoa = new Pessoa('Ana', 'Aninha...', 20, '123.456.789-11');
// console.log('pessoa.getCpf() = ', pessoa.getCpf());
// pessoa.setCpf('111.111.111-11');
// console.log('pessoa.getCpf() = ', pessoa.getCpf());
