interface StatusInterface {
    message: string;
    data: any;
    code: number;
}
declare class Status implements StatusInterface {
    message: any;
    data: any;
    code: any;
    constructor(code: number, message: string, data: any);
}
export { Status };
