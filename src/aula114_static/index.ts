export class Pessoa {
  static altura = 1.5;
  constructor(
    public nome: string,
    public snome: string,
    public idade: number,
    public _cpf: string,
  ) {}
  static toStatic(): void {
    console.log(`Oi ${Pessoa.altura}`);
  }
}
const pessoa = new Pessoa('Ana', 'Aninha...', 20, '123.456.789-11');
console.log('pessoa = ', pessoa);
Pessoa.toStatic();
