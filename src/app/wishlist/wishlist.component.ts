import { Component, OnInit } from '@angular/core';
import { Wishservice } from '../wish.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishitems = [];
  constructor(private wishservice: Wishservice) {
    this.wishitems = this.wishservice.getwish();
   }

  ngOnInit() {}
  deleteFromWish(productId) {
    this.wishservice.deleteFromWish(productId);
  }
  clearwish() {
    this.wishservice.clearwish();
    this.wishitems = this.wishservice.getwish();
}
}
