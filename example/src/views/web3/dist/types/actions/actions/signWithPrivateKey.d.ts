import { Result } from '../result';
declare class SignWithPrivateKey {
    signWithPrivateKey(data: string | string, privateKey: string): Promise<Result>;
}
export { SignWithPrivateKey };
