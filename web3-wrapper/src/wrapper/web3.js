import Web3js from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'

let provider = null

async function web3Install(){
  provider = await detectEthereumProvider()
  if(provider){
    return new Web3js(provider)
  }else{
    return null
  }
}
export { web3Install };
