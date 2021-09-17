import { Status } from "../actions/status";
declare const PredefinedStatus: {
    SUCCESS: (userData: any) => Status;
    DEFAULT_STATE: (userData: any) => Status;
    ERROR_STATE: (userData: any) => Status;
    NOT_SUPPORT: (userData: any) => Status;
};
export default PredefinedStatus;
