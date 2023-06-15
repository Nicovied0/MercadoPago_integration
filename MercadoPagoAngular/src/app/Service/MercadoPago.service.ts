import { Injectable } from '@angular/core';

declare const MercadoPago: any; // Declara la variable global MercadoPago

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {
  private mercadopago: any;
  private preferenceId: string = '';

  constructor() {
    this.mercadopago = (window as any).MercadoPago; // Accede a la variable global MercadoPago
    if (!this.mercadopago) {
      console.error('La librería de Mercado Pago no se ha cargado correctamente.');
    } else {
      this.initializeMercadoPago();
    }
  }

  private initializeMercadoPago() {
    this.mercadopago.configure({
      // Configura los parámetros necesarios
      publicKey: 'TEST-fb9f35fe-fdd7-4df3-82a9-3975d03cad9a',
      locale: 'es-AR',
    });
  }

  createPreference(orderData: any): Promise<any> {
    return fetch('http://localhost:8080/create_preference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((preference) => {
        this.preferenceId = preference.id;
        return preference;
      })
      .catch(() => {
        alert('Unexpected error');
      });
  }

  
}
