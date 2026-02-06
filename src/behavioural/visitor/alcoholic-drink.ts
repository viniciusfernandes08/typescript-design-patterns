import { FeesVisitorProtocol } from './fees-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class AlcoholicDrink extends VisitableProduct {
  constructor(protected price: number) {
    super('Alcoholic drink', price);
  }

  getPriceWithFees(visitor: FeesVisitorProtocol): number {
    return visitor.calculateFeesForAlcoholicDrink(this);
  }
}
