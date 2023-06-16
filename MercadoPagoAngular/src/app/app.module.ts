import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MercadopagoButtonComponent } from './mercadopago-button/mercadopago-button.component';
// import { MercadopagoService } from './Service/MercadoPago.service';

@NgModule({
  declarations: [
    AppComponent,
    // MercadopagoButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
