import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { ApiPromise, WsProvider } from '@polkadot/api'
import Decimal from 'decimal.js'


describe('getBalance', () => {

  it('getBalanceFunction', async () => {
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });
    const { nonce, data: balance } = await api.query.system.account('5DFojLCUUsfZV26fg4YUj5bbocMMdCdydEBD2KeFWrVBPw1h')
    const balanceNumber = balance.free
    let free = await new Decimal(`${balanceNumber}`).div(new Decimal(Math.pow(10, 10))).toString()
    console.log(free)
    let Action = await new Actions()
    let shouldBalance = await Action.actions.getBalance('5DFojLCUUsfZV26fg4YUj5bbocMMdCdydEBD2KeFWrVBPw1h')
    let results = new Result(PredefinedStatus.SUCCESS(free))
    expect(shouldBalance).to.deep.equal(results)
  }).timeout(100000)

})
