class Proxy {
  constructor(){
    
  }
  public link(param: any){
    return 'link'
  }
  public unlink(){
    return 'unlink'
  }
}

let ProxyExtend = new Proxy()

let ProxyWallet = function(){
  let loadProxy = new Proxy()
  console.log(loadProxy)
}
console.log(ProxyWallet())

export default ProxyExtend