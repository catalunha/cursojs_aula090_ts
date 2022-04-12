type TipoPessoa = {
  nome: string;
  snome: string;
  //duas formas de ter uma funcao
  // nomeCompleto(): string;
  nomeCompleto: () => string;
};
// export abstract class TipoPessoa {
//   protected abstract nome: string;
//   protected abstract snome: string;
//   protected abstract nomeCompleto(): string;
// }
export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public snome: string) {}
  nomeCompleto(): string {
    return `${this.nome} ${this.snome}`;
  }
}
const pessoa = new Pessoa('Ana', 'Aninha...');
console.log('pessoa.nomeCompleto() = ', pessoa.nomeCompleto());
