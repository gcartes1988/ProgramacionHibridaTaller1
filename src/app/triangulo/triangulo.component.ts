import { Component } from '@angular/core';
import { IonItem, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonLabel, IonInput, IonButton, IonText, IonImg } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Triangulo } from '../../models/triangulo';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  imports: [IonItem, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonLabel, IonInput, IonButton, IonText, IonImg, FormsModule, NgIf],
})
export class TrianguloComponent {
  ladoA!: number;
  ladoB!: number;
  ladoC!: number;
  perimetro?: number;

  calcularPerimetro() {
    if (this.ladoA && this.ladoB && this.ladoC) {
      let triangulo = new Triangulo(this.ladoA, this.ladoB, this.ladoC);
      this.perimetro = triangulo.calcularPerimetro();
    } else {
      // Manejo de error si algún lado no está definido
      console.error("Todos los lados deben tener un valor.");
    }
  }
}
