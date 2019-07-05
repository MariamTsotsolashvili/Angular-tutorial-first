import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    constructor(private http: HttpClient) { }
    items = [];
    wishlistitems = [];

    addToCart(product) {
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }
    RemoveFromCart(productId) {
        this.items.splice(productId, 1);
    }
    getShippingCosts() {
        return this.http.get('/assets/shipping.json');
    }
}
