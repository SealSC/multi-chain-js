interface signTransactionDataField {
    raw: string;
    tx: txDataField;
}
interface txDataField {
    nonce: string;
    gasPrice: string;
    gas: string;
    to: string;
    value: string;
    input: string;
    v: string;
    r: string;
    s: string;
    hash: string;
}
declare class signTransactionField implements signTransactionDataField {
    raw: any;
    tx: any;
}
export { signTransactionField };
