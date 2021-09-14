declare class ActionsIn {
    constructor();
    getAccount(): Promise<import("../result").Result>;
    getBalance(address: string): Promise<import("../result").Result>;
    getBlock(block: string | number): Promise<import("../result").Result>;
    getBlockNumber(): Promise<import("../result").Result>;
    getTransaction(txHash: string): Promise<import("../result").Result>;
    getTransactionCount(txHash: string): Promise<import("../result").Result>;
    sendSignedTransaction(address: string, count: string | number): Promise<unknown>;
    signWithWallet(dataToSign: any | string): Promise<import("../result").Result>;
    signWithPrivateKey(data: string | string, privateKey: string): Promise<import("../result").Result>;
    signTransaction(dataToSign: object | string, address: string): Promise<import("../result").Result>;
    signTransactionPrivateKey(dataToSign: object | string, privateKey: string): Promise<import("../result").Result>;
    sendTransaction(transactionObject: any): Promise<import("../result").Result>;
    loadContract(contract: any, address: string): Promise<import("../result").Result>;
}
export { ActionsIn };
