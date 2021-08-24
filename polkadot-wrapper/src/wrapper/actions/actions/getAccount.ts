import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import {getAccountInterface } from '../classInterface'

class GetAccount{
  public async getAccount(){
    // console.log((window as any).api.genesisHash.toHex())
    const ADDR = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE';
    console.log(await (window as any).api.query.system.account(ADDR))
    // console.log((window as any).api.consts.babe.epochDuration.toNumber());
    // console.log(await (window as any).api.rpc.system.chain())
    // console.log(await (window as any).api.rpc.eth)
    console.log(await (window as any).api.query.indices.accounts)
    // const { nonce, data: balance } = await (window as any).api.query.system.account(ADDR);
    // console.log(nonce)
    // console.log( balance.free )
  }
}
export { GetAccount }