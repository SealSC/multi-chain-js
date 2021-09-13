import { Result } from '../result';
declare class SignWithWallet {
    signWithWallet(dataToSign: string): Promise<Result>;
}
export { SignWithWallet };
