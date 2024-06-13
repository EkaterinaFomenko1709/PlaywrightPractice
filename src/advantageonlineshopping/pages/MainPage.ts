import type { Locator, Page } from  '@playwright/test';
import { HeaderItem } from  'src/advantageonlineshopping/header/HeaderItem';
import { expect } from '@playwright/test';
import { BaseComponent as BaseComponent } from '../components/BaseComponent';
import { ContactUsComponent } from '../components/ContactUsComponent';
import { OurProductsComponent } from '../components/OurProductsComponent';
import { PopularItemsComponent } from '../components/PopularItemsComponent';
import { SpecialOfferComponent } from '../components/SpecialOfferComponent';
import ShoppingCartPage from './ShoppingCartPage';
import { Console } from 'console';
import { text } from 'stream/consumers';


export default class MainPage{
    readonly _page: Page; // readonly - cannot be changed, can have just get(), no set()
    private _logo: Locator; 
    private  _iconShoppingCart: Locator; 
    private _iconShoppingCartCounter: Locator;

    
    constructor(page:Page){   
        this._page = page;
        this._logo = page.getByRole('link', {name: 'dvantage DEMO'});
        this._iconShoppingCart = page.locator("#menuCart");
        this._iconShoppingCartCounter = page.locator("(//*[@id='shoppingCartLink'])/span[@ng-show='(cart | productsCartCount) > 0']");
 
        this.verifyOnPage().then(p => {return this});       
    }

    private async verifyOnPage(){
        let visisble :boolean = false;
        await this._logo.isVisible().then((resolvedValue)=>{visisble = resolvedValue});
        if (!visisble){     
            await this._page.goto('/'); 
        }
        await expect(this._logo).toBeVisible();
    }

     /**
     * name
     */
    public goToPageComponent <T extends BaseComponent> (menuItem: HeaderItem) : T {
        
        this._page.getByRole('link', { name: menuItem.valueOf() }).click();

        switch(menuItem) { 
            case HeaderItem.SPECIAL_OFFER: {
                return new SpecialOfferComponent(this._page) as unknown as T //WHY???
            }
            case HeaderItem.CONTACT_US: { 
               return new ContactUsComponent(this._page) as T
            } 
            case HeaderItem.OUR_PRODUCTS: { 
                return new OurProductsComponent(this._page) as T
            } 
            case HeaderItem.POPULAR_ITEMS: { 
                return new PopularItemsComponent(this._page) as T
            }
            default: {
                return new BaseComponent(this._page, HeaderItem.OUR_PRODUCTS) as T
            }
         } 
     }

    public async  goToShoppingCart()  : Promise<ShoppingCartPage>{
        await this._iconShoppingCart.click();
        return  new ShoppingCartPage(this._page);
    }

    public async getProductCounterValue(empty: boolean): Promise<MainPage>{
        let text = await this._iconShoppingCartCounter.innerText();
        let productCounter: number =  parseInt(text);

        if (empty == true){
            if (productCounter == 0){
                //TODO: add logging - verification successfull
            }
            else{
                //TODO: add logging - verification failed
                console.error("Shopping cart is NOT empty as expected");
            }
        }
        else{
            if (productCounter == 0){
                //TODO: add logging - verification failed
                console.error("Shopping cart is empty after adding a product");
            }
            else{
                //TODO: add logging - verification successfull
                console.error("Shopping cart is empty as expected");
            }                 
        }
         return this;
    }

}
