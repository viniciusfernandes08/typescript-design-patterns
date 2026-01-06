import { DiscountStrategy } from ".";
import { ECommerceShoppingCart } from "../shopping-cart/ecommerce";

export class FiveDiscount extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotalGross();

    if (total >= 150) {
      this.discount = 5;
    }

    return total - total * (this.discount / 100);
  }
}
