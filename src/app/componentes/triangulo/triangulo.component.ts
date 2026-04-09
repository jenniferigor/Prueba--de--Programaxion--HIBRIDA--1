import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TrianguloEscaleno } from '../../modelos';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class TrianguloComponent {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  resultado: string = "";

  calcular() {
    const fig = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    const perimetro = fig.calcularPerimetro();
    this.resultado = `El perímetro es ${perimetro} cm`;
  }
}
