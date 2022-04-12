export class Calculadora {
  constructor(public numero: number) {}
  add(n: number): this {
    this.numero += n;
    return this;
  }
  sub(n: number): this {
    this.numero -= n;
    return this;
  }
  mult(n: number): this {
    this.numero *= n;
    return this;
  }
  div(n: number): this {
    this.numero /= n;
    return this;
  }
}
const calc = new Calculadora(2);

const resultado = calc.add(1).add(2);
console.log('resultado = ', resultado);

//Builder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;
  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }
  setUrl(url: string): this {
    this.url = url;
    return this;
  }
  send(): void {
    console.log(`Send: ${this.method} to ${this.url}`);
  }
}
const req = new RequestBuilder();
req.setMethod('get').setUrl('http://www.site.com.br').send();
