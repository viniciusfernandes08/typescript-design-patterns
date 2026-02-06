import { AlcoholicDrink } from './alcoholic-drink';
import { BrazilFeesVisitor } from './brazil-fees-visitor';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { USFeesVisitor } from './us-fees-visitor';

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(5);

const brazilFeesVisitor = new BrazilFeesVisitor();
const usFeesVisitor = new USFeesVisitor();

const cart = [food, cigarette, alcoholicDrink];

const total = cart.reduce((sum, item) => sum + item.getPrice(), 0);
const totalWithBrazilFees = cart.reduce(
  (sum, item) => sum + item.getPriceWithFees(brazilFeesVisitor),
  0,
);
const totalWithUSFees = cart.reduce(
  (sum, item) => sum + item.getPriceWithFees(usFeesVisitor),
  0,
);

console.log(total);
console.log(totalWithBrazilFees);
console.log(totalWithUSFees);
