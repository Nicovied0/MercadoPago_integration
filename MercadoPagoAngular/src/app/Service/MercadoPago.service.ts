import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {
  private mercadopago: any;

  constructor() {
    // Accede a la variable global MercadoPago
    this.mercadopago = (window as any).MercadoPago;

    if (!this.mercadopago || !this.mercadopago.configure) {
      console.error('La librería de Mercado Pago no se ha cargado correctamente o no se encuentra la función configure.');
    } else {
      this.initializeMercadoPago();
    }
  }

  public initializeMercadoPago() {
    this.mercadopago.configure({
      publicKey: 'TEST-fb9f35fe-fdd7-4df3-82a9-3975d03cad9a',
      locale: 'es-AR',
    });
  }

  public createCheckoutButton(preferenceId: string) {
    const bricksBuilder = this.mercadopago.bricks();

    const renderComponent = async (bricksBuilder: any) => {
      await bricksBuilder.create(
        'wallet',
        'button-checkout', // class/id where the payment button will be displayed
        {
          initialization: {
            preferenceId: preferenceId,
          },
          callbacks: {
            onError: (error: any) => console.error(error),
            onReady: () => { },
          },
        }
      );
    };

    renderComponent(bricksBuilder);
  }
}
