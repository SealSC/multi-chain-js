import { Result } from '../result';
declare class SignTransactionPrivateKey {
    signTransactionPrivateKey(dataToSign: object | string, privateKey: string): Promise<Result>;
}
export { SignTransactionPrivateKey };
