import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    let jVarLocalHtmlId = "MultipleQrCodeButtonId";
    let jVarLocalShowQrCodeButtonId = document.getElementById(jVarLocalHtmlId);

    jVarLocalShowQrCodeButtonId.addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };