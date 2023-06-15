import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  productos: any[] = [
    { nombre: 'Producto 1', precio: 10 },
    { nombre: 'Producto 2', precio: 20 },
    { nombre: 'Producto 3', precio: 30 },
  ];

  constructor() { }

}
