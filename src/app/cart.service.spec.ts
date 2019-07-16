import { CartService } from './cart.service';

describe ('Testing cart service', () => {
    let service: CartService;
    beforeEach(() => {
        service = new CartService();
    });
    it('Method getItems should return access value', () => {
        expect(service.getItems()).toBe(service.items);
    });
    it('Method clearCart should return access value', () => {
        expect(service.clearCart()).toBe(service.items);
    });
    it('Method addToCart should return access value', () => {
        service.addToCart('some');
        expect(service.items.includes('some')).toBe(true);
    });
    it('Method RemoveFromCart should return access value', () => {
        service.RemoveFromCart('some');
        expect(service.items.includes('some')).toBe(false);
    });
});
