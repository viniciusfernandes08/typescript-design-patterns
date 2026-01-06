import { ECommerceShoppingCart } from "../shopping-cart/ecommerce";

export class DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getTotalGross();
  }
}
