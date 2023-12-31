import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadopagoButtonComponent } from './mercadopago-button.component';

describe('MercadopagoButtonComponent', () => {
  let component: MercadopagoButtonComponent;
  let fixture: ComponentFixture<MercadopagoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadopagoButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercadopagoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
