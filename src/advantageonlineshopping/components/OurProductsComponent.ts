import type { Page } from  '@playwright/test';
import { HeaderItem } from '../header/HeaderItem';
import { BaseComponent } from './BaseComponent';


export class OurProductsComponent extends BaseComponent{
    constructor(page:Page){        
        super(page, HeaderItem.OUR_PRODUCTS);
    }
}