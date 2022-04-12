export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}
  atacar(personagem: Personagem): void {
    // console.log(`${this.nome} está atacando...`);
    this.bordao();
    personagem.perderVida(this.ataque);
  }
  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} => ${this.nome} tem ${this.vida} de vida`);
  }
  abstract bordao(): void;
}

export class Guerreiro extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(this.emoji + 'Guerreira ao ataque...');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + 'MONSTRO ao ataque...');
  }
}

const guerreiro = new Guerreiro('Guerreiro', 100, 1000);
const mostro = new Monstro('Monstro', 50, 1000);

guerreiro.atacar(mostro);
guerreiro.atacar(mostro);
guerreiro.atacar(mostro);
mostro.atacar(guerreiro);
mostro.atacar(guerreiro);
mostro.atacar(guerreiro);
