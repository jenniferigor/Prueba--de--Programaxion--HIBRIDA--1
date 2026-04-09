export abstract class FiguraGeometrica {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  abstract calcularPerimetro(): number;
}

export class Circulo extends FiguraGeometrica {
  radio: number;
  constructor(radio: number) {
    super("Círculo");
    this.radio = radio;
  }
  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}

export class TrianguloEscaleno extends FiguraGeometrica {
  ladoA: number;
  ladoB: number;
  ladoC: number;
  constructor(a: number, b: number, c: number) {
    super("Triángulo Escaleno");
    this.ladoA = a;
    this.ladoB = b;
    this.ladoC = c;
  }
  calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}