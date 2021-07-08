import { GetAccount } from '../actions/actions/getAccount'
import { GetBlock } from '../actions/actions/getBlock'
import { GetBlockNumber } from '../actions/actions/getBlockNumber'
import { GetBalance } from '../actions/actions/getBalance'
import { GetTransaction } from '../actions/actions/getTransaction'
import { GetTransactionCount } from '../actions/actions/getTransactionCount'

class Actions {
  public actions
  public block
  public blockNumber
  public Balance
  public Transaction
  public TransactionCount
  constructor() {
    this.actions=new GetAccount()
    this.block=new GetBlock()
    this.blockNumber=new GetBlockNumber()
    this.Balance=new GetBalance()
    this.Transaction=new GetTransaction()
    this.TransactionCount=new GetTransactionCount()
  }
}

let ActionsExtend = new Actions()

export default ActionsExtend
