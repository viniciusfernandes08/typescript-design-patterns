import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocation } from './delivery-location';
import { DeliveryFactoryDictionary } from './types/factory';
import { DeliveryLocationState } from './types/location';

export class DeliveryFactory {
  private locations: DeliveryFactoryDictionary = {};

  private createKey(data: DeliveryLocationState): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLowerCase())
      .join('_');
  }

  makeLocation(state: DeliveryLocationState): DeliveryFlyweight {
    const key = this.createKey(state);
    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryLocation(state);
    return this.locations[key];
  }

  getLocations(): DeliveryFactoryDictionary {
    return this.locations
  }
}
