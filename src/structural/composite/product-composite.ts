export abstract class ProductComponent {
  abstract getPrice(): number;
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

//Client
const pen = new ProductLeaf('Caneta', 2);
const smartphone = new ProductLeaf('Celular', 1_000);
const tShirt = new ProductLeaf('Camiseta', 40);
const productBox = new ProductComposite();
productBox.add(pen, smartphone, tShirt);
console.log(productBox.getPrice());

const tablet = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('Kindle', 300);
const productBox2 = new ProductComposite();
productBox2.add(tablet, kindle);
productBox.add(productBox2);

console.log(productBox.getPrice());
