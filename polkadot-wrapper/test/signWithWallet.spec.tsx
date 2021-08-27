import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { web3Accounts, web3Enable ,web3FromSource } from '@polkadot/extension-dapp'
import { stringToHex } from '@polkadot/util'

describe('SignWithWallet', () => {
  
  it('Wallet installed SignWithWallet', async ()=>{

    const extensions = await web3Enable('my cool dapp')
    let Action = await new Actions()
    let shouldBlockHash = await Action.actions.signWithWallet('1','ddddd')
   
    expect(shouldBlockHash.code).to.equal(0)

  }).timeout(100000)

  it('Wallet not installed SignWithWallet',async ()=>{

  }).timeout(100000)
 
}).timeout(1000000)
