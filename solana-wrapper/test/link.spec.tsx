import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/web3'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('link', () => {
  it('Wallet installed linkFunction', async ()=>{
    let isPhantom =await  web3InstallisPhantom()
    // console.log(await  web3InstallisPhantom(),"PPSS@@@@33333")
    let Action = await new Actions()
    let shouldAccount: any = await Action.connector.link();
    // await (window as any).solana.off().connect()
    await isPhantom.off().connect()
    let accountSelect = isPhantom.off().publicKey
    let results = new Result(PredefinedStatus.SUCCESS(accountSelect))  
    expect(shouldAccount).to.deep.equal(results)
  }).timeout(100000)

  it('Wallet not installed linkFunction',async ()=>{

    (window as any).isPhantom= {};
    let Action = await new Actions();
    let shouldGetBalance: any = await Action.connector.link();
    // console.log(Action,shouldGetBalance,"shouldGetBalance")
    let results = new Result(PredefinedStatus.ERROR_STATE('Please go and install'))
    expect(shouldGetBalance).to.deep.equal(results)

  }).timeout(100000)
   
})
