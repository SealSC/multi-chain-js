import { Result } from '../result';
declare class SendSignedTransaction {
    sendSignedTransaction(dataToSign: string): Promise<Result>;
}
export { SendSignedTransaction };
