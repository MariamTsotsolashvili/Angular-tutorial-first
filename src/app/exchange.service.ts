import { Injectable } from '@angular/core';
import { data } from './currencies';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  currencies;
  from;
  to;
  Observer;
  rate;

  constructor(private httpClient: HttpClient) {
    this.currencies = data;
    this.Observer = new Observable(this.Rate);
   }

   setFrom(value) {
    this.from = value;
    if (this.to) {
      this.Rate();
    }
   }

   setTo(value) {
     this.to = value;
     if (this.from) {
      this.Rate();
    }
   }

   Rate() {
    const url = `https://api.exchangeratesapi.io/latest?base=${this.from}&symbols=${this.to}`;

    this.httpClient.get(url).subscribe(value => {
      this.setRate(value);
    });
   }

   setRate(value) {
    this.rate = value.rates[this.to];
  }
}
