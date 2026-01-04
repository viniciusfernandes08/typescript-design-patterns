import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocationState } from './types/location';

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationState) {}

  deliver(name: string, number: string): void {
    console.log('Entrega para:', name);
    console.log('em ', this.intrinsicState.street, this.intrinsicState.city);
    console.log('número: ', number);
  }
}
