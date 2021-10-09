interface TransactionField {
  hash: string
  nonce: number
  blockHash: string
  blockNumber: Number
  transactionIndex: number
  from: string
  to: string
  value: number
  gas: number
  gasPrice: string
  input: string
}

class getTransactionField implements TransactionField {
  public hash
  public nonce
  public blockHash
  public blockNumber
  public transactionIndex
  public from
  public to
  public value
  public gas
  public gasPrice
  public input
}


export { getTransactionField }
