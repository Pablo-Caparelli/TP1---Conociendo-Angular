import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  contador: number = 0;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

  reiniciar() {
    this.contador = 0;
  }
}
