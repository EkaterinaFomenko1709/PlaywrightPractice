import type { Page } from  '@playwright/test';
import { HeaderItem } from '../header/HeaderItem';
import { BaseComponent } from './BaseComponent';

export class ContactUsComponent extends BaseComponent {
    constructor(page:Page){        
        super(page, HeaderItem.CONTACT_US);
    }
}