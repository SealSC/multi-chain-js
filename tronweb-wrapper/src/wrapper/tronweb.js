import TronWeb from 'tronweb'
import * as sleep from 'await-sleep';
let HttpProvider = null
async function tronWebInstall() {
  return window.tronWeb
}
async function web3InstallisPhantom() {
  await sleep(1500);
  const provider = window.tronWeb;
  if (provider) {
    window.isPhantom = window.tronWeb
    return window.isPhantom;
  }
}

export { tronWebInstall, web3InstallisPhantom };

