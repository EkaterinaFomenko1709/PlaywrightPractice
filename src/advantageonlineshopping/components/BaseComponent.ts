import { expect, type Page } from  '@playwright/test';
import { HeaderItem } from '../header/HeaderItem';

export class BaseComponent {
    protected readonly _page: Page;
    
    constructor (page:Page, linkName: HeaderItem){        
        this._page = page;
        this.verifyComponentPresence(linkName);
    }

    private async verifyComponentPresence(componentTitle: HeaderItem) {
        await expect(this._page.getByRole('heading', { name: componentTitle })).toBeVisible({ timeout: 10000 });
    }
}