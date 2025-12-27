import { CarFactory } from './factories/car-factory';
import { randomVehicle } from './main/random-vehicle';
import { randomNumber } from './utils/random-numbers';

const carFactory = new CarFactory()
const customerNames = ['Ana', 'Helena', 'João'];

for (let i = 0; i < 5; i++) {
  const vehicle = randomVehicle();
  const name = customerNames[randomNumber(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `Carro - ${randomNumber(100)}`)
  newCar.stop()
}
