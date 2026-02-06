import { FeesVisitorProtocol } from './fees-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class Food extends VisitableProduct {
  constructor(protected price: number) {
    super('Food', price);
  }

  getPriceWithFees(visitor: FeesVisitorProtocol): number {
    return visitor.calculateFeesForFood(this);
  }
}
