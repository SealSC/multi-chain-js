import { Result } from '../result';
declare class SendSignedTransaction {
    sendSignedTransaction(to: any, amount: any, from: any, options: any, privateKey: string): Promise<Result>;
}
export { SendSignedTransaction };
