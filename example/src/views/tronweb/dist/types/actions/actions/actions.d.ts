declare class ActionsIn {
    constructor();
    getAccount(): Promise<import("../result").Result>;
    getBalance(address: string): Promise<import("../result").Result>;
    getBlock(block: string | number): Promise<import("../result").Result>;
    getBlockNumber(block: string | number): Promise<import("../result").Result>;
    getTransaction(txHash: string): Promise<import("../result").Result>;
    getTransactionCount(): Promise<import("../result").Result>;
    sendSignedTransaction(to: any, amount: any, from: any, options: any, privateKey: string): Promise<import("../result").Result>;
    signWithWallet(content: string, dataToSign?: object | string, address?: string): Promise<import("../result").Result>;
    signWithPrivateKey(): Promise<import("../result").Result>;
    signTransaction(dataToSign: object | string, address: string): Promise<import("../result").Result>;
    signTransactionPrivateKey(dataToSign: object, privateKey: string): Promise<import("../result").Result>;
    sendTransaction(transactionObject: any): Promise<any>;
    loadContract(abiJson: any, contractAddress: string): Promise<import("../result").Result>;
}
export { ActionsIn };
