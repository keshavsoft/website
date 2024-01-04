import { StartFunc as StartFuncQrCodeToModal } from "../../QrCodeToModal.js";
import DataJson from './Data.json' assert {type: 'json'};

let StartFunc = () => {
    let jFLocalData = DataJson;

    StartFuncQrCodeToModal({ inData: jFLocalData }).then();
};

export { StartFunc };