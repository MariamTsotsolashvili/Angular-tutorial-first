import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class CartService {
    constructor() { }
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
}
