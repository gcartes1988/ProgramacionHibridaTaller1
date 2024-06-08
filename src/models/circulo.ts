import { FiguraGeometrica } from './figura-geometrica';

export class Circulo extends FiguraGeometrica {
  private radio: number;

  constructor(radio: number) {
    super('Circulo');
    this.radio = radio;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio; //Calcular el perímetro de un círculo es 2𝜋 × radio.  Math.PI es una constante en JavaScript que representa el valor de 𝜋
  }
}
