import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class Wishservice {
    constructor(private http: HttpClient) { }
    wishlistitems = [];

    addToWish(product) {
        this.wishlistitems.push(product);
    }

    getwish() {
        return this.wishlistitems;
    }

    clearwish() {
        this.wishlistitems = [];
        return this.wishlistitems;
    }
    RemoveFromWishlist(wishitems) {
        this.wishlistitems.splice(wishitems, 1);
    }
}
