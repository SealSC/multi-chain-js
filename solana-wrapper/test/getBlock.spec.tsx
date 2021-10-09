import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
// import { getBlockField } from '../src/wrapper/fieldDefinition/getBlockField'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('getBlock', () => {
   

  it('Wallet installed getBlockFunction', async ()=>{

    (window as any).solanaWeb3 = await web3Install()
    let Action = await new Actions()
    let shouldGetBlock = await Action.actions.getBlock(9603492);
    const connection = new (window as any).solanaWeb3.Connection(
        (window as any).solanaWeb3.clusterApiUrl("devnet"),
        "confirmed"
      );
    let  blockData =await connection.getBlock(9603492)
            
    let results = new Result(PredefinedStatus.SUCCESS(blockData));
    // console.log(results,shouldGetBlock,"#########")
    expect(shouldGetBlock).to.deep.equal(results)

  }).timeout(100000)

  it('Wallet not installed getBlockFunction',async ()=>{

    (window as any).solanaWeb3 = {}
    let Action = await new Actions();
    let shouldGetBlock = await Action.actions.getBlock(9603492);
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldGetBlock).to.deep.equal(results)

  }).timeout(100000)

})