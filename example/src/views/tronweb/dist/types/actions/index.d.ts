import { ActionsIn } from '../actions/actions/actions';
import { Result } from '../actions/result';
import { ContractCall } from '../contractCall';
declare class Actions {
    actions: ActionsIn;
    contract: ContractCall;
    constructor();
    init(): Promise<Result>;
}
export { Actions };
