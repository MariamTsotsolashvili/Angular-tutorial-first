import {UsersService} from './users.service';


describe ('Testing cart service', () => {
    let service: UsersService;
    beforeEach(() => {
        service = new UsersService();
    });
    it('Method addToCart should return access value', () => {
        service.UsersStore('some');
        expect(service.users.includes('some')).toBe(true);
    });
});
