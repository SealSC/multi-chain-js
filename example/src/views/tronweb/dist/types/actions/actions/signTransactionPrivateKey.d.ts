import { Result } from '../result';
declare class SignTransactionPrivateKey {
    signTransactionPrivateKey(dataToSign: any, privateKey: string): Promise<Result>;
}
export { SignTransactionPrivateKey };
