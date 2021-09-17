import { Result } from '../result';
declare class SignWithWallet {
    signWithWallet(dataToSign: any | string): Promise<Result>;
}
export { SignWithWallet };
