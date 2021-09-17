import { Result } from '../result';
declare class SignTransaction {
    signTransaction(dataToSign: object | string, address: string): Promise<Result>;
}
export { SignTransaction };
