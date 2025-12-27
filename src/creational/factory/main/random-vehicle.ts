import { BicycleFactory } from '../factories/bicyle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumber } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle';

export function randomVehicle(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta Preto');
  const bicycle = bicycleFactory.getVehicle('Vikingx');
  const vehicles = [car1, car2, bicycle];
  return vehicles[randomNumber(vehicles.length)];
}
