import { expect, type Locator, type Page } from  '@playwright/test';
import MainPage from './MainPage';


export default class OfferPage {
     readonly _page: Page;
     private _btnAddToCart : Locator;
    
    constructor(page:Page){        
        this._page = page;
        this._btnAddToCart = page.getByRole('button', { name: 'ADD TO CART' });
        this.verifyOnPage();
    }
    
    private async verifyOnPage() {
        await expect(this._btnAddToCart).toBeVisible();
    }

     public async addProductToCart(): Promise <MainPage>{
        await this._btnAddToCart.click();
        return new MainPage(this._page);
    }
}
