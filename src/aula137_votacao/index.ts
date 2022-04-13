type VotationOption = {
  option: string;
  numberOfvotes: number;
};
export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}
  addOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }
  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfvotes += 1;
  }
  showOptions(): void {
    for (const votationOption of this._votationOptions) {
      console.log(votationOption.option, votationOption.numberOfvotes);
    }
  }
}

export class VotationApp {
  private _votations: Votation[] = [];
  addVotation(votation: Votation): void {
    this._votations.push(votation);
  }
  showVotations(): void {
    for (const votation of this._votations) {
      console.log(votation.details);
      votation.showOptions();
    }
  }
}

const votation1 = new Votation('Qual sua comida preferida ?');
votation1.addOption({ option: 'Angu', numberOfvotes: 0 });
votation1.addOption({ option: 'Quiabo', numberOfvotes: 0 });

const votationApp = new VotationApp();
votationApp.addVotation(votation1);

votationApp.showVotations();
votation1.vote(1);
votationApp.showVotations();
