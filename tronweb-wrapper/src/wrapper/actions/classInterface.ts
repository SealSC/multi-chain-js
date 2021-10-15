interface dataInterface {
  code: number
  message: string
}

interface getAccountInterface extends dataInterface {
  data: null | Array<string>
}

interface getBlockInterface extends dataInterface {
  data: null | Object
}
interface getBlockNumbeInterface extends dataInterface {
  data: null | Number
}
interface getBalanceInterface extends dataInterface {
  data: null | string
}
interface getTransactionInterface extends dataInterface {
  data: null | Object
}
interface getTransactionCountInterface extends dataInterface {
  data: null | Number
}
interface signInterface extends dataInterface {
  data: null | string
}
interface signTransactionInterface extends dataInterface {
  data: null | Object
}
interface sendSignedTransactionInterface extends dataInterface {
  data: null | string
}

export {
  getAccountInterface,
  getBlockInterface,
  getBlockNumbeInterface,
  getBalanceInterface,
  getTransactionInterface,
  getTransactionCountInterface,
  signInterface,
  signTransactionInterface,
  sendSignedTransactionInterface
}