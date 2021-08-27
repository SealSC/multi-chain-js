import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { getBlockField } from '../src/wrapper/fieldDefinition/getBlockField'
import {ApiPromise, WsProvider} from '@polkadot/api'

describe('getBlock', () => {
  
  it('Wallet installed getBlockFunction', async ()=>{
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });
    const blockHash = await api.rpc.chain.getBlockHash(6521853);
    const signedBlock = await api.rpc.chain.getBlock(blockHash);
    let Block = JSON.parse(`${signedBlock.block.header}`)
    let Action = await new Actions()
    let shouldBlockHash= await Action.actions.getBlock(6521853)
    let results = new Result(PredefinedStatus.SUCCESS(Block))
    expect(shouldBlockHash).to.deep.equal(results)
  }).timeout(100000)

  it('Wallet not installed getBlockFunction',async ()=>{


  }).timeout(100000)

})
