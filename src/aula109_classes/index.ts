export class Empresa {
  // public readonly nome: string = 'Ana';
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  mostrarColadorador(): void {
    for (const col of this.colaboradores) {
      console.log(col);
    }
  }
}
export class Colaborador {
  constructor(public readonly nome: string, public readonly snome: string) {}
}
const empresa1 = new Empresa('Brintec', '11.111.111/0001-11');
console.log('empresa1 = ', empresa1);
console.log('empresa1.nome = ', empresa1.nome);
const colaborador1 = new Colaborador('Ana', 'Aninha...');
const colaborador2 = new Colaborador('Bia', 'Biazinha...');
empresa1.addColaborador(colaborador1);
console.log('empresa1 = ', empresa1);
empresa1.addColaborador(colaborador2);
console.log('empresa1 = ', empresa1);
empresa1.mostrarColadorador();
