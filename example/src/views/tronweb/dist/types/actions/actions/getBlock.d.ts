import { Result } from '../result';
declare class GetBlock {
    getBlock(block: number | string): Promise<Result>;
}
export { GetBlock };
