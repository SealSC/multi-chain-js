import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { tronWebInstall } from '../src/wrapper/tronweb'

let detectEthereumProvider = require('@metamask/detect-provider')

describe('sendSignedTransaction', () => {

  it('Wallet installed sendSignedTransaction', async ()=>{

    (window as any).tronWeb = await tronWebInstall()
    let Action = await new Actions();
  
    let shouldsendSignedTransaction = await Action.actions.sendSignedTransaction("0xf8527b8502340be400830186a080808081e6a09b111a9f5f50d207dfe9cd8beb619e6531f7dc84faea934e58426c7126fae3d2a01b484f72e5644327d244856ceb592b57b47b3438af35b12a30904b7b61975237");
    if(shouldsendSignedTransaction.data) expect(shouldsendSignedTransaction.data.status).to.be.true

  }).timeout(100000)

  it('Wallet not installed sendSignedTransaction',async ()=>{

    (window as any).tronWeb = {}
    let Action = await new Actions();
    let shouldsendSignedTransaction = await Action.actions.sendSignedTransaction("0xf8527b8502540be400830186a080808081e6a09b111a9f5f50d207dfe9cd8beb619e6531f7dc84faea934e58426c7126fae3d2a01b484f72e5644327d244856ceb592b57b47b3438af35b12a30904b7b61975237");
  
    if(shouldsendSignedTransaction.data) expect(shouldsendSignedTransaction.data.status).to.not.true

  }).timeout(100000)
   
})