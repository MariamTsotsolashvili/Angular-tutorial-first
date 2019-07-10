import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shippingCosts;
  selectedShipping;


  constructor(private shippingservice: ShippingService) {
    this.shippingCosts = shippingservice.getShippingCosts();
    this.selectedShipping = shippingservice.getType();
   }

  ngOnInit() {
  }



  selectShipping(value) {
    this.shippingservice.setShipping(value);
  }

}
