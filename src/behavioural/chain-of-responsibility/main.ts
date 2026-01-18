import { CustomerBudget } from './customer-budget';
import { CEOBudgetHandler } from './enterprise-handler/ceo-budget-handler';
import { DirectorBudgetHandler } from './enterprise-handler/director-budget-handler';
import { ManagerBudgetHandler } from './enterprise-handler/manager-budget-handler';
import { SellerBudgetHandler } from './enterprise-handler/seller-budget-handler';

const customerBudget = new CustomerBudget(150000);

const seller = new SellerBudgetHandler();
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

seller.handle(customerBudget);
