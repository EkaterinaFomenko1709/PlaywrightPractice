import { HeaderItem } from "../header/HeaderItem";
import MainPage from "../pages/MainPage";
import OfferPage from "../pages/OfferPage";
import { BaseComponent } from "./BaseComponent";
import type { Page } from  '@playwright/test';


export class SpecialOfferComponent extends BaseComponent {

    private readonly _btnSeeOffer = "[id='see_offer_btn']";

    constructor(page:Page){        
        super(page, HeaderItem.SPECIAL_OFFER);
    }

    public async displaySpecialOffer(): Promise<OfferPage>{
        await this._page.click(this._btnSeeOffer);
        const offerPage = new OfferPage(this._page);
        return offerPage;       
     }

}
