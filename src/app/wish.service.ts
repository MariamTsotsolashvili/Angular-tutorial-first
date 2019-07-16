import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Wishservice {
    constructor() { }
    wishlistitems = [];

    addToWish(product) {
        if (!this.wishlistitems.includes(product)) {
            this.wishlistitems.push(product);
        } else {
            return false;
        }
    }

    getwish() {
        return this.wishlistitems;
    }

    clearwish() {
        this.wishlistitems = [];
        return this.wishlistitems;
    }
    deleteFromWish(productId) {
        this.wishlistitems.splice(productId, 1);
    }
}
