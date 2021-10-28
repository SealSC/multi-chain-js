import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('getBlock', () => {
  it('Wallet installed getBlockFunction', async () => {
    (window as any).solanaWeb3 = await web3Install()
    let Action = await new Actions()
    let shouldGetBlock = await Action.actions.getBlock(90323674);
    const connection = new (window as any).solanaWeb3.Connection(
      (window as any).solanaWeb3.clusterApiUrl("devnet"),
      "confirmed"
    );
    let blockData = await connection.getBlock(90323674)
    let results = new Result(PredefinedStatus.SUCCESS(blockData));
    expect(shouldGetBlock).to.deep.equal(results)
  }).timeout(100000)

  it('Wallet not installed getBlockFunction', async () => {
    (window as any).solanaWeb3 = {}
    let Action = await new Actions();
    let shouldGetBlock = await Action.actions.getBlock(90323674);
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldGetBlock).to.deep.equal(results)
  }).timeout(100000)
})
