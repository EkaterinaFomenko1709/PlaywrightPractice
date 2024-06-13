import { expect, type Page } from  '@playwright/test';
import { HeaderItem } from '../header/HeaderItem';
import { BaseComponent } from './BaseComponent';

export class PopularItemsComponent extends BaseComponent {
    constructor(page:Page){        
        super(page, HeaderItem.POPULAR_ITEMS);
    }
}