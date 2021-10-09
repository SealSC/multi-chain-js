
import { Result } from "../wrapper/actions/result";
import PredefinedStatus from "../wrapper/consts/consts";

const defaultGas = {
    price: "4000000000",
    limit: "150000",
    shouldPollResponse: true,
};
function GasSetting(setting): any {
    setting.callValue = setting.callValue ? setting.callValue : defaultGas.price;
    setting.feeLimit = setting.feeLimit ? setting.feeLimit : defaultGas.limit;
    setting.shouldPollResponse = setting.shouldPollResponse ? setting.shouldPollResponse : defaultGas.shouldPollResponse;
    return setting;
}

const transactionResultGetter = (resolve, data, err) => {
    let result;
    result = new Result(PredefinedStatus.SUCCESS(data));
    resolve(result);
};

export {
    GasSetting,
    transactionResultGetter,
};

