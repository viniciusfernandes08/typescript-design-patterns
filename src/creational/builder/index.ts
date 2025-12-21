import { MainDishBuilder } from "./classes/main-dish-builder";

const mainDishBuilder = new MainDishBuilder()
mainDishBuilder.makeMeal()

console.log(mainDishBuilder.getPrice())
