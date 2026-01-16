import { ShoppingOrder } from "./shopping-order";
import { ShoppingOrderState } from "./shopping-order-state";

export class OrderRejected implements ShoppingOrderState {
  private readonly name = 'OrderRejected'

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name
  }

  approvePayment(): void {
    console.log('Não é possível aprovar o pagamento, pois foi rejeitado')
  }

  rejectPayment(): void {
    console.log('O pedido já está no estado pagamento rejeitado')
  }

  waitPayment(): void {
    console.log('Não é possível deixar o pagamento como pendente, pois foi rejeitado')
  }

  shipOrder(): void {
    console.log('Não é possível enviar um pagamento rejeitado')
  }
}
