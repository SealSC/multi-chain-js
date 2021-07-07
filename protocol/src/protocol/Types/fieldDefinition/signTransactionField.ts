interface signTransactionDataField{
  raw:string 
  tx: Object
}

class signTransactionField implements signTransactionDataField{
  public raw
  public tx
}


export { signTransactionField }
