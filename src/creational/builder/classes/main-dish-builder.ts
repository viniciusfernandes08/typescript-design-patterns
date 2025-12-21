import { MealBuilder } from '../interfaces/meal-builder';
import { MealBox } from './meal-box';
import { Beans, Dessert, Drink, Rice } from './products';

export class MainDishBuilder implements MealBuilder {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 15);
    const beans = new Beans('Feijão', 10);
    this._meal.add(rice, beans);
    return this;
  }

  makeDrink(): this {
    const drink = new Drink('Refri', 10);
    this._meal.add(drink);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Marshmallow', 40);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
