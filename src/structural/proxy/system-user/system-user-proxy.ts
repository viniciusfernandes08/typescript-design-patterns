import { AdminUser } from './admin-user';
import { SystemUserAddress, SystemUserProtocol } from './system-user-protocol';

//Exemplo de proxy para cache
export class SystemUserProxy implements SystemUserProtocol {
  private realUser: SystemUserProtocol | null = null;
  private realUserAddresses: SystemUserAddress[] | null = null;

  constructor(public firstName: string, public username: string) {}

  private createUser(): SystemUserProtocol {
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.username);
    }

    return this.realUser;
  }

  async getAddresses(): Promise<SystemUserAddress[]> {
    this.realUser = this.createUser();

    if (this.realUserAddresses === null) {
      this.realUserAddresses = await this.realUser.getAddresses();
    }

    return this.realUserAddresses;
  }
}
