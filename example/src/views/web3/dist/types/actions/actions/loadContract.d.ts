import { Result } from '../result';
declare class LoadContract {
    loadContract(abi: any, address: string): Promise<Result>;
}
export { LoadContract };
