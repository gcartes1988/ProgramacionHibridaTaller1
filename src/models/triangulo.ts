import { FiguraGeometrica } from './figura-geometrica';

export class Triangulo extends FiguraGeometrica {
  private ladoA: number;
  private ladoB: number;
  private ladoC: number;

  constructor(ladoA: number, ladoB: number, ladoC: number) {
    super('Triángulo');
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}
