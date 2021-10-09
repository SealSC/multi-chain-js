interface signTransactionDataField {
  raw: string
  tx: txDataField
}
interface txDataField {
  nonce: string
  gasPrice: string
  gas: string
  to: string
  value: string
  input: string
  v: string
  r: string
  s: string
  hash: string
}

class signTransactionField implements signTransactionDataField {
  public raw
  public tx
}

export { signTransactionField }
