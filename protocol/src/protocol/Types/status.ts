interface StatusInterface{
  message:string
  data:any
  code:number
}

class Status implements StatusInterface{
  public message
  public data
  public code
  constructor(code: number, message:string, data: any){
    this.code = code
    this.message = message
    this.data = data
  }
}

export { Status }