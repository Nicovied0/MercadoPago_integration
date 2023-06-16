import { Component, OnInit } from '@angular/core';
import { MercadopagoService } from './Service/MercadoPago.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  productos: any[] = [
    { nombre: 'Producto 1', precio: 10 },
    { nombre: 'Producto 2', precio: 20 },
    { nombre: 'Producto 3', precio: 30 },
  ];

  public precioTotal = 1000;

  constructor(private mercadopagoService: MercadopagoService) { }

  ngOnInit() {
    // Inicializa Mercado Pago en el servicio
    this.mercadopagoService.initializeMercadoPago();
  }

  comprar() {
    const orderData = {
      quantity: '1',
      description: 'Un Pancho',
      price: this.precioTotal.toString(),
    };

    fetch('http://localhost:8080/create_preference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((preference) => {
        this.mercadopagoService.createCheckoutButton(preference.id);
      })
      .catch(() => {
        alert('Error inesperado');
      });
  }
}
