import { ProductCustomDecorator } from './product/product-custom-decorator';
import { ProductPrintDecorator } from './product/product-print-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const printedTShirt = new ProductPrintDecorator(tShirt);
const customTShirt = new ProductCustomDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName())
console.log(printedTShirt.getPrice(), printedTShirt.getName())
console.log(customTShirt.getPrice(), customTShirt.getName())
