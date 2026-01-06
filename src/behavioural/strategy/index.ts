import { DefaultDiscount } from "./discount/default";
import { FiveDiscount } from "./discount/five";
import { ECommerceShoppingCart } from "./shopping-cart/ecommerce";

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new FiveDiscount();
// shoppingCart.discount = new DefaultDiscount();
shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
shoppingCart.addProduct({ name: 'Produto 3', price: 50 });
console.log(shoppingCart.getTotalGross());
console.log(shoppingCart.getTotalWithDiscount());
