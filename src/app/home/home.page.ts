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

  medidaInicial = '';
  medidaFinal = '';
  resMedida = '';
  cm = '';
  metro = ''
  km = '';
  pes = '';
  polegadas = '';



  converterMedidas(ev:RangeCustomEvent){
    this.valorRange = (Number(ev.detail.value.toString()));

    if(this.medidaInicial == 'Centímetros'){
      if(this.medidaFinal == 'pes'){
        this.resMedida = (this.valorRange/30.48).toString();
      } else if(this.medidaFinal == 'polegadas'){
        this.resMedida = (this.valorRange*0.3937).toString();
      }
    } else if(this.medidaInicial == 'Metros'){
      if(this.medidaFinal == 'pes'){
        this.resMedida = (this.valorRange/0.3048).toString();
      } else if(this.medidaFinal == 'polegadas'){
        this.resMedida = (this.valorRange*39.37).toString();
      }
    } else{
    
    }
  }
}
