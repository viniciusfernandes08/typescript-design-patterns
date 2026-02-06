import { FeesVisitorProtocol } from "./fees-visitor-protocol";

export abstract class VisitableProduct {
  constructor(protected name: string, protected price: number) {}

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  abstract getPriceWithFees(visitor: FeesVisitorProtocol): number;
}
