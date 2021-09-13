import { Result } from '../result';
declare class SignWithWallet {
    signWithWallet(dataToSign: any | string, address: string): Promise<Result>;
}
export { SignWithWallet };
