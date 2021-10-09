import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { ApiPromise, WsProvider } from '@polkadot/api'

describe('getBlockNumber', () => {
  it('getBlockNumberFunction', async () => {

    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });

    let Action = await new Actions()
    let shouldBlockHash = await Action.actions.getBlockNumber()

    const lastHdr = await api.rpc.chain.getHeader();
    const BlockNumber = lastHdr.number;
    let results = new Result(PredefinedStatus.SUCCESS(Number(`${BlockNumber}`)))
    expect(shouldBlockHash).to.deep.equal(results)

  }).timeout(100000)

})
