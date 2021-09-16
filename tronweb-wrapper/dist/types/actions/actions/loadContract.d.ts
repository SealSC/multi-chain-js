import { Result } from '../result';
declare class LoadContract {
    loadContract(abiJson: any, contractAddress: string): Promise<Result>;
}
export { LoadContract };
