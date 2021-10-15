interface BlockDataField {
  number: Number
  hash: string
  parentHash: string
  nonce: string
  sha3Uncles: string
  logsBloom: string
  transactionsRoot: string
  stateRoot: string
  miner: string
  difficulty: string
  totalDifficulty: string
  size: number
  extraData: string
  gasLimit: number
  gasUsed: number
  timestamp: number
  transactions: Array<string>
  uncles: []
}

class getBlockField implements BlockDataField {
  public number
  public hash
  public parentHash
  public nonce
  public sha3Uncles
  public logsBloom
  public transactionsRoot
  public stateRoot
  public miner
  public difficulty
  public totalDifficulty
  public size
  public extraData
  public gasLimit
  public gasUsed
  public timestamp
  public transactions
  public uncles
}


export { getBlockField }
