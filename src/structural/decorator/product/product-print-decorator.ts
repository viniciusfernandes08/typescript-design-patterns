import { ProductDecorator } from './product-decorator';

export class ProductPrintDecorator extends ProductDecorator {
  getPrice(): number {
    return this.product.getPrice() + 10;
  }

  getName(): string {
    return this.product.getName() + 'estampada';
  }
}
