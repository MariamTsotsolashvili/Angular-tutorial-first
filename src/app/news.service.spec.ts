import {NewsService} from './news.service';
import { dataBase } from './dbarticle';


describe ('Testing cart service', () => {
    let service: NewsService;
    beforeEach(() => {
        service = new NewsService();
    });
    it('Method getArticles should be true', () => {
        expect(service.getArticles()).toBe(dataBase);
    });
    it('Method getArticleById should return item', () => {
        const item = service.getArticleById(1267472382);
        expect(item).toBe(dataBase[0]);
    });
});
