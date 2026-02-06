import { FeesVisitorProtocol } from './fees-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class Cigarette extends VisitableProduct {
  constructor(protected price: number) {
    super('Cigarette', price);
  }

  getPriceWithFees(visitor: FeesVisitorProtocol): number {
    return visitor.calculateFeesForCigarette(this);
  }
}
