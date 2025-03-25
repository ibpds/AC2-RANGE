import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}


  valorRange = 0;
  inputValor = '';
  resGorjeta = '';
  valorConta = '';

   calcularGorjeta(ev:RangeCustomEvent){
    this.valorRange = (Number(ev.detail.value.toString())/100);
    this.resGorjeta = Math.round(Number(this.inputValor)*this.valorRange).toString();
    this.valorConta = (Number(this.inputValor) + Number(this.resGorjeta)).toString();
  };

  medida = '';
  cm = '';
  metro = ''
  km = '';
  pes = '';
  polegadas = '';
  milhas = '';

  converterMedidas(ev:RangeCustomEvent){
    this.valorRange = (Number(ev.detail.value.toString()));
  }
}
