import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ExchangeService } from '../exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  exchangeForm;
  currencies;
  Observer;
  from = 'From';
  to = 'To';

  constructor(
    private fBuilder: FormBuilder,
    private exchangeService: ExchangeService,
    ) {
    this.exchangeForm = this.fBuilder.group({
      input: [''],
      output: ['']
    });
    this.currencies = this.exchangeService.currencies;
    this.Observer = this.exchangeService.Observer;
   }

  ngOnInit() {
  }

  setFrom(value) {
    this.exchangeService.setFrom(value);
    this.from = value;
  }

  setTo(value) {
    this.exchangeService.setTo(value);
    this.to = value;
  }

  get input() {
    return this.exchangeForm.get('input');
  }
  get outPut() {
    return this.exchangeForm.get('output');
  }

  getInput() {
    return this.outPut.value / this.exchangeService.rate;
  }

  getOutput() {
    return this.exchangeService.rate * this.input.value;
  }
}
