import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'

describe('getBlockNumber', () => {
  it('getBlockNumberFunction', async () => {
    let Action = await new Actions()
    let shouldBlockHash = await Action.actions.getBlockNumber()

    const lastHdr = await (window as any).api.rpc.chain.getHeader();
    const BlockNumber = lastHdr.number;
    let results = new Result(PredefinedStatus.SUCCESS(Number(`${BlockNumber}`)))
    expect(shouldBlockHash).to.deep.equal(results)
  }).timeout(100000)

})
