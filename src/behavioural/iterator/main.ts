import { MyDataStructure } from './data-structure';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D');

const [ a, b ] = dataStructure

console.log(a, b)

for (const data of dataStructure) {
  console.log(data)
}
