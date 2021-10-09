interface TransactionField {
    hash: string;
    nonce: number;
    blockHash: string;
    blockNumber: Number;
    transactionIndex: number;
    from: string;
    to: string;
    value: number;
    gas: number;
    gasPrice: string;
    input: string;
}
declare class getTransactionField implements TransactionField {
    hash: any;
    nonce: any;
    blockHash: any;
    blockNumber: any;
    transactionIndex: any;
    from: any;
    to: any;
    value: any;
    gas: any;
    gasPrice: any;
    input: any;
}
export { getTransactionField };
