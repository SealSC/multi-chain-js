import { Result } from '../wrapper/actions/result';
declare class ContractCall {
    offChainCall(contract: any, methodName: string, param: [], amount: any, extra: any): Promise<Result>;
    onChainCall(contract: any, methodName: string, param: any, extra: any): Promise<Result>;
}
export { ContractCall };
