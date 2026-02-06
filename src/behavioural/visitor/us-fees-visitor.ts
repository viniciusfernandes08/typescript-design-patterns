import { AlcoholicDrink } from "./alcoholic-drink";
import { Cigarette } from "./cigarette";
import { FeesVisitorProtocol } from './fees-visitor-protocol';
import { Food } from "./food";

export class USFeesVisitor implements FeesVisitorProtocol {
  calculateFeesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.1;
  }

  calculateFeesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 2;
  }

  calculateFeesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 1;
  }
}
