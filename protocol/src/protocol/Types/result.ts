interface ResultInterface{
  code: number
  data: any
  message: string
}

class Result implements ResultInterface{
    public code
    public data
    public message
    constructor(data:any){
      this.code = data.code
      this.data = data.data
      this.message = data.message
    }
}

export { Result }