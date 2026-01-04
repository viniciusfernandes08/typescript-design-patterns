export type SystemUserAddress = { street: string; number: number };

export interface SystemUserProtocol {
  firstName: string;
  username: string;

  getAddresses(): Promise<SystemUserAddress[]>;
}
