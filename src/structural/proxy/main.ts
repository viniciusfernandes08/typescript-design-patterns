import { SystemUserProxy } from "./system-user/system-user-proxy";

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Teo', 'teo@123')
  console.log('chamada demorando 2 segundos')
  console.log(await user.getAddresses())

  console.log('abaixo virá do cache')
  for(let i = 0; i < 5; i++) {
    console.log(await user.getAddresses())
  }
}

clientCode()
