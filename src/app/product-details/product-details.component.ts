import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from './../products';
import { CartService } from '../cart.service';
import { Wishservice } from '../wish.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
    product;
    wishitems = [];

    constructor(private route: ActivatedRoute, private cartService: CartService, private wishservice: Wishservice) {
        this.wishitems = this.wishservice.getwish();
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.product = products[+params.get('productId')];
        });
    }

    addToCart(product) {
        window.alert('Your product has been added!');
        this.cartService.addToCart(product);
    }

    addToWish(product) {
        window.alert('Your product has been added!');
        this.wishservice.addToWish(product);
    }
    existance(product) {
        return this.wishitems.includes(product);
    }
    deleteFromWish(productId) {
        window.alert('Your product has been removed!');
        this.wishservice.deleteFromWish(productId);
    }
}
