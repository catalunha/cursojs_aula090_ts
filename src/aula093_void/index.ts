function semRetorno(...args: string[]): void {
  return console.log(args.join(' - '));
}

semRetorno('a', 'b');

const pessoa = {
  nome: 'Ana',
  saudar(): void {
    console.log(this.nome);
  },
};

pessoa.saudar();

export { pessoa };
