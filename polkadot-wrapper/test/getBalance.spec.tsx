import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import {ApiPromise, WsProvider} from '@polkadot/api'

describe('getBalance', () => {

  it('Wallet installed getBalanceFunction', async ()=>{
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });
    const { nonce, data: balance } = await api.query.system.account('5DFojLCUUsfZV26fg4YUj5bbocMMdCdydEBD2KeFWrVBPw1h')
    const balanceNumber = balance.free
    let Action  = await new Actions()
    let shouldBalance = await Action.actions.getBalance('5DFojLCUUsfZV26fg4YUj5bbocMMdCdydEBD2KeFWrVBPw1h')
    
    let results = new Result(PredefinedStatus.SUCCESS(`${balanceNumber}`))
    expect(shouldBalance).to.deep.equal(results)
  }).timeout(100000)

  it('Wallet not installed getBalanceFunction',async ()=>{
    
  }).timeout(100000)
   
})
