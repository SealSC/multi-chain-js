import { Result } from '../result';
declare class SendTransaction {
    sendTransaction(transactionObject: object): Promise<Result>;
}
export { SendTransaction };
