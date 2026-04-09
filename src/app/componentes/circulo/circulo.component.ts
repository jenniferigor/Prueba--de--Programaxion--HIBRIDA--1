import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Circulo } from '../../modelos';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class CirculoComponent {
  radio: number = 0;
  resultado: string = "";

  // Evento click solicitado en la pauta
  calcular() {
    const fig = new Circulo(this.radio);
    const perimetro = fig.calcularPerimetro();
    this.resultado = `El perímetro es ${perimetro.toFixed(2)} cm`;
  }
}
