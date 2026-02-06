import { AlcoholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { FeesVisitorProtocol } from './fees-visitor-protocol';
import { Food } from './food';

export class BrazilFeesVisitor implements FeesVisitorProtocol {
  calculateFeesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.05;
  }

  calculateFeesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 1.5;
  }

  calculateFeesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 0.5;
  }
}
