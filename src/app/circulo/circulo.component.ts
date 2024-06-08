import { Component } from '@angular/core';
import { IonItem, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonLabel, IonInput, IonButton, IonText, IonImg } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Circulo } from '../../models/circulo'; // Asegúrate de que la clase Circulo esté definida correctamente

@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  imports: [IonItem, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonLabel, IonInput, IonButton, IonText, IonImg, FormsModule, NgIf],
})
export class CirculoComponent {
  radio!: number;
  perimetro?: number;

  calcularPerimetro() {
    if (this.radio) {
      let circulo = new Circulo(this.radio);
      this.perimetro = circulo.calcularPerimetro();
    } else {
      // Manejo de error si el radio no está definido
      console.error("El radio debe tener un valor.");
    }
  }
}
