import { test, expect } from '@playwright/test';
import { SpecialOfferComponent } from 'src/advantageonlineshopping/components/SpecialOfferComponent';
import { HeaderItem } from 'src/advantageonlineshopping/header/HeaderItem';
import MainPage from 'src/advantageonlineshopping/pages/MainPage';
import OfferPage from 'src/advantageonlineshopping/pages/OfferPage';
import ShoppingCartPage from 'src/advantageonlineshopping/pages/ShoppingCartPage';


test('test', async ({ page }) => {
  let mp : MainPage = await new MainPage(page);
  let so : SpecialOfferComponent = await mp.goToPageComponent<SpecialOfferComponent>(HeaderItem.SPECIAL_OFFER);
  let op : OfferPage = await so.displaySpecialOffer();
  mp = await op.addProductToCart();
  mp = await mp.getProductCounterValue(false);
  let scp: ShoppingCartPage = await mp.goToShoppingCart();    
  mp = await scp.clearProductCart();
  //p.getProductCounterValue(true);

});

