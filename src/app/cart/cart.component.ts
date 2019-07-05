import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
    items;
    checkedForm;
    constructor(private cartService: CartService,
                private formBuilder: FormBuilder) {
        this.items = this.cartService.getItems();

        this.checkedForm = formBuilder.group({
            name: '',
            address: ''
        });
    }

    ngOnInit() { }
    RemoveFromCart(productId) {
        this.cartService.RemoveFromCart(productId);
    }
    clearCart() {
        this.cartService.clearCart();
        this.items = this.cartService.getItems();
    }
    onSubmit(value) {
        console.log(value);

        this.checkedForm.reset();
    }
    resetForm() {
        this.checkedForm.get('name').setValue('m');
        this.checkedForm.get('address').setValue('rustavi');
    }
}
