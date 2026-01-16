import { ShoppingOrder } from "./shopping-order/shopping-order";

const order = new ShoppingOrder()
order.approvePayment()
order.waitPayment()
order.shipOrder()
order.rejectPayment() // daqui não altera mais o estado
order.approvePayment()
order.waitPayment()
