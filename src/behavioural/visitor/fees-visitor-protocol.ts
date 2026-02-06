import { AlcoholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';

export interface FeesVisitorProtocol {
  calculateFeesForFood(food: Food): number;
  calculateFeesForCigarette(cigarette: Cigarette): number;
  calculateFeesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number;
}
