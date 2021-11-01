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
    window.isTronLink = window.tronWeb
    return window.isTronLink;
  }
}

export { tronWebInstall, web3InstallisPhantom };

