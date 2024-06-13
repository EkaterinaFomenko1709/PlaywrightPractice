import { expect, type Locator, type Page } from  '@playwright/test';
import MainPage from './MainPage';

export default class ShoppingCartPage {
    readonly _page: Page;
    private _title : Locator;
    
    constructor(page:Page){        
        this._page = page;
        this._title = page.locator("[id='shoppingCart']");
        this.verifyOnPage();
    }
    
    private async verifyOnPage() {
       await expect(this._title).toBeVisible();
    }

    // public clearProductCart() : MainPage{
    //     const myPromise = this.promiseToClearProductCart()
    //     let mainPage: any;
    //     myPromise.then((resolvedValue)=>{mainPage = resolvedValue});
    //     return mainPage;

    // }

    public async clearProductCart() : Promise<MainPage>{
        const removeBtns = await this._page.locator("[class='remove red ng-scope']").all();
        for (const removeBtn of removeBtns) {
            await removeBtn.click();
          }
        return new MainPage(this._page);
    }
}
