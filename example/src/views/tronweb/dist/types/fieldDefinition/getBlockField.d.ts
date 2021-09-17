interface BlockDataField {
    number: Number;
    hash: string;
    parentHash: string;
    nonce: string;
    sha3Uncles: string;
    logsBloom: string;
    transactionsRoot: string;
    stateRoot: string;
    miner: string;
    difficulty: string;
    totalDifficulty: string;
    size: number;
    extraData: string;
    gasLimit: number;
    gasUsed: number;
    timestamp: number;
    transactions: Array<string>;
    uncles: [];
}
declare class getBlockField implements BlockDataField {
    number: any;
    hash: any;
    parentHash: any;
    nonce: any;
    sha3Uncles: any;
    logsBloom: any;
    transactionsRoot: any;
    stateRoot: any;
    miner: any;
    difficulty: any;
    totalDifficulty: any;
    size: any;
    extraData: any;
    gasLimit: any;
    gasUsed: any;
    timestamp: any;
    transactions: any;
    uncles: any;
}
export { getBlockField };
