import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    let jVarLocalShowQrCodeButtonId = document.getElementById("GenerateQrCodeButtonId");

    jVarLocalShowQrCodeButtonId.addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };