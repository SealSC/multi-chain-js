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

export default ProxyExtend