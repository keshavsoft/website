import { StartFunc as StartFuncUploadCsvData } from "./UploadCsvData/StartFunc.js";
import { StartFunc as StartFuncSelectedColumns } from "./SelectedColumns/StartFunc.js";
import { StartFunc as StartFuncHelpModal } from "./HelpModal/StartFunc.js";

let StartFunc = () => {
    StartFuncUploadCsvData();
    StartFuncSelectedColumns();
    StartFuncHelpModal();
};

export { StartFunc };