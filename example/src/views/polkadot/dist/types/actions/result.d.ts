interface ResultInterface {
    code: number;
    data: any;
    message: string;
}
declare class Result implements ResultInterface {
    code: any;
    data: any;
    message: any;
    constructor(data: any);
}
export { Result };
