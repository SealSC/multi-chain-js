import { Result } from '../result';
declare class GetBlockNumber {
    getBlockNumber(block: string | number): Promise<Result>;
}
export { GetBlockNumber };
