import { Result } from '../wrapper/actions/result';
declare class Connector {
    link(): Promise<Result>;
}
export { Connector };
