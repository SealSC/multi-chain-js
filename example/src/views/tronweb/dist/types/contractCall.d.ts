declare class ContractCall {
    offChainCall(contract: any, methodName: string, param: [], amount: any, extra: any): Promise<unknown>;
    onChainCall(contract: any, methodName: string, param: any, extra: any): Promise<unknown>;
}
export { ContractCall };
