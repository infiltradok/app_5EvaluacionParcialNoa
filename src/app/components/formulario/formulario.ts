import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',

  imports: [FormsModule],

  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  nombre = '';
  correo = '';
  telefono = '';
  idioma = '';
  mensaje = '';

  enviado = false;

  enviarFormulario() {

    this.enviado = true;

  }

}