import { Result } from '../result';
declare class GetTransaction {
    getTransaction(txHash: string): Promise<Result>;
}
export { GetTransaction };
