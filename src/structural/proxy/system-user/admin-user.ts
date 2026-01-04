import { SystemUserAddress, SystemUserProtocol } from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  constructor(public firstName: string, public username: string) {}

  async getAddresses(): Promise<SystemUserAddress[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Av. Brasil', number: 50 },
          { street: 'Rua Maior', number: 2 },
        ]);
      }, 2000);
    });
  }
}
