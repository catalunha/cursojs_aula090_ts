//Carro e moto
//motor e composição do carro.
//humano e coração
export class Carro {
  private readonly motor: Motor = new Motor();
  ligar(): void {
    this.motor.ligar();
  }
  acelerar(): void {
    this.motor.acelerar();
  }
  parar(): void {
    this.motor.parar();
  }
  desligar(): void {
    this.motor.desligar();
  }
}
export class Motor {
  ligar(): void {
    console.log('Motor ligar');
  }
  acelerar(): void {
    console.log('Motor acelerar');
  }
  parar(): void {
    console.log('Motor parar');
  }
  desligar(): void {
    console.log('Motor desligar');
  }
}
const carro = new Carro();
carro.ligar();
