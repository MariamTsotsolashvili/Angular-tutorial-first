import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../shipping.service';

@Component({
  providers: [ShippingService],
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shippingCosts;


  constructor(private shippingservice: ShippingService) {
    this.shippingCosts = shippingservice.getShippingCosts();
   }

  ngOnInit() {
  }

  get selectedShipping() {
    return this.shippingservice.getType();
  }

  selectShipping(value) {
    this.shippingservice.setShipping(value);
  }

}
