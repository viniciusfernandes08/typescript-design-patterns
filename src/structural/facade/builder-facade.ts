import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';

export class BuilderFacade {
  // fachada para src/creational/builder/index.ts
  private mainDishBuilder = new MainDishBuilder();

  makeMeal1(): void {
    this.mainDishBuilder.makeMeal();
    console.log(this.mainDishBuilder.getMeal());
  }

  makeMeal2(): void {
    this.mainDishBuilder.reset();
    const meal2 = this.mainDishBuilder.makeDrink().getMeal();
    console.log(meal2);
  }
}
