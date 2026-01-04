import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'João', '9', 'Rua B', 'Moinhos');
deliveryContext(factory, 'Helena', '10', 'Rua B', 'Moinhos');
deliveryContext(factory, 'Camila', '11', 'Rua B', 'Moinhos');
deliveryContext(factory, 'Tadeu', '5', 'Rua das Flores', 'Araraquara');

console.log('---')
console.log(factory.getLocations())
