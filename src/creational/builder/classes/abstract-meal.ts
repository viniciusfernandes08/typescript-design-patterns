import { Meal } from '../interfaces/meal';

export abstract class AbstractMeal implements Meal {
  constructor(private name: string, private price: number) {}

  getPrice(): number {
    return this.price;
  }
}
