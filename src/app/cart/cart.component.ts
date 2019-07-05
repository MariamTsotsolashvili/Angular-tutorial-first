import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

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
            name: ['', [Validators.minLength(2), this.forbiddenName()]],
            address: formBuilder.group({
                street: '',
                city: '',
                state: '',
                zipcode: ''
            })
        });
    }

    ngOnInit() { }

    forbiddenName() {
        return (formControl) => {
            return formControl.value === 'Roman' ? {forbidden: {invalid: true}} : null;
        }
    }
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
        this.checkedForm.patchValue({name: 'mariam'});
    }
    get name() {
        return this.checkedForm.get('name') as FormControl;
    }
}
