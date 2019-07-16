import { NewsComponent } from './news.component';
import { NewsService } from '../news.service';
import { dataBase } from '../dbarticle';

describe('Testing MenuComponent', () => {
   let newsComponent: NewsComponent;
   const newsService: NewsService = new NewsService();
   beforeEach( () => {
    newsComponent = new NewsComponent(newsService);
   });
   it('Method showMenu should be true', () => {
    expect(newsComponent.articles).toBe(dataBase);
});
});
