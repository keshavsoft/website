import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

const StartFunc = () => {
    let ButtonClickId = "OrginalColumnId";

    let jVarLocalCreateFolderButtonId = document.getElementById(ButtonClickId);

    if (jVarLocalCreateFolderButtonId === null === false) {
        jVarLocalCreateFolderButtonId.addEventListener("click", StartFuncButtonClickFunc);
    };
};

export { StartFunc };
