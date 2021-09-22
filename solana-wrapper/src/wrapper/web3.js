// import Web3js from 'web3'
// import detectEthereumProvider from '@metamask/detect-provider'
let solanaWeb3 = require("@solana/web3.js");
import * as sleep from 'await-sleep';

async function web3Install(){
 
  await sleep(1500);
  const provider = window.solana;
  // console.log(provider,"provider.isPhantom")
  if (provider.isPhantom) {
    window.solanaWeb3 = solanaWeb3
    
    return window.solanaWeb3;
  } 
}

async function web3InstallisPhantom(){
 
  await sleep(1500);
  const provider = window.solana;
  // console.log(provider,"provider.isPhantom")
  if (provider.isPhantom) {
    window.isPhantom = window.solana
    
    return window.isPhantom;
  } 
}
export { web3Install ,web3InstallisPhantom};
