import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

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
            }, {
                validators: this.crossValidation
            })
        });
    }

    static isZipOk(zip) {
        return zip.length < 3;
    }

    static isCityOk(city) {
        return city.charAt(0).toLowerCase() !== 'a';
    }

    ngOnInit() { }

    crossValidation(formGroup) {
        const zip = formGroup.get('zipcode').value;
        const zipStatus = CartComponent.isZipOk(zip);

        const city = formGroup.get('city').value;
        const cityStatus = CartComponent.isCityOk(city);

        return zipStatus && cityStatus ? null : {
            zipStatus,
            cityStatus
        };
    }

    forbiddenName() {
        return (formControl) => {
            return formControl.value === 'Roman' ? {forbidden: {invalid: true}} : null;
        };
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
    get address() {
        return this.checkedForm.get('address') as FormGroup;
    }
}
