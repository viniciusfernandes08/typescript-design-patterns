import { Meal } from '../interfaces/meal';

export class MealBox implements Meal {
  private readonly _children: Meal[] = [];

  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meal: Meal[]): void {
    meal.forEach((item) => this._children.push(item));
  }
}
