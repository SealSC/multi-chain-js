import Web3js from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'

let provider = null

async function web3web3Install() {
  provider = await detectEthereumProvider()
  return new Web3js(provider)
}
export default { web3web3Install };
