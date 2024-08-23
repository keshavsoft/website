import { StartFunc as StartFuncGenerateQrCodeButtonId } from "./GenerateQrCodeButtonId/EntryFile.js";
import { StartFunc as StartFuncMultipleQrCodeButtonId } from "./MultipleQrCodeButtonId/EntryFile.js";

let StartFunc = () => {
    StartFuncGenerateQrCodeButtonId();
    StartFuncMultipleQrCodeButtonId();
};

export { StartFunc };