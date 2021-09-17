import { ActionsIn } from '../actions/actions/actions';
import { Connector } from '../connector';
import { Result } from '../actions/result';
import { ContractCall } from '../contractCall';
declare class Actions {
    actions: ActionsIn;
    connector: Connector;
    contract: ContractCall;
    constructor();
    init(): Promise<Result>;
}
export { Actions };
