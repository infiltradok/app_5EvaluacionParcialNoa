import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Inicio } from './components/inicio/inicio';
import { Idiomas } from './components/idiomas/idiomas';
import { Docentes } from './components/docentes/docentes';
import { Promociones } from './components/promociones/promociones';
import { Resenas } from './components/resenas/resenas';
import { Nosotros } from './components/nosotros/nosotros';
import { Formulario } from './components/formulario/formulario';

@Component({
  selector: 'app-root',

  imports: [
    Navbar,
    Inicio,
    Idiomas,
    Docentes,
    Promociones,
    Resenas,
    Nosotros,
    Formulario
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}