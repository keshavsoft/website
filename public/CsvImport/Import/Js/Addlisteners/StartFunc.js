import { StartFunc as StartFuncUploadCsvData } from "./UploadCsvData/StartFunc.js";
import { StartFunc as StartFuncSelectedColumns } from "./SelectedColumns/StartFunc.js";

let StartFunc = () => {
    StartFuncUploadCsvData();
    StartFuncSelectedColumns();
};

export { StartFunc };