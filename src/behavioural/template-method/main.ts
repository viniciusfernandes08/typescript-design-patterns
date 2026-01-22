import { resolve } from 'path';
import { CustomerDataParserTxt } from './customer-data-parser-txt';
import { CustomerDataParserJson } from './customer-data-parser-json';

async function run() {
  const filePathTxt = resolve(__dirname, 'files', 'customer.txt');
  const txt = new CustomerDataParserTxt(filePathTxt);
  await txt.fixCustomerData();
  console.log(txt.customerData);

  console.log('---');

  const filePathJson = resolve(__dirname, 'files', 'customer.json');
  const json = new CustomerDataParserJson(filePathJson);
  await json.fixCustomerData();
  console.log(json.customerData);
}

run();
