import {Wishservice} from './wish.service';


describe ('Testing cart service', () => {
    let service: Wishservice;
    beforeEach(() => {
        service = new Wishservice();
    });
    it('Method addToWish should return access value', () => {
        service.addToWish('some');
        expect(service.wishlistitems.includes('some')).toBe(true);
        service.addToWish('some');
        expect(service.wishlistitems.length).toBe(1);
    });
    it('Method getwish should return access value', () => {
        expect(service.getwish()).toBe(service.wishlistitems);
    });
    it('Method clearwish should return access value', () => {
        service.clearwish();
        expect(service.wishlistitems.length).toBe(0);
    });
    it('Method deleteFromWish should return access value', () => {
        service.deleteFromWish('some');
        expect(service.wishlistitems.includes('some')).toBe(false);
    });
});
