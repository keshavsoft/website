import { StartFunc as StartFuncCheckBeforeFetch } from "./CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc1 = async () => {
    if (StartFuncCheckBeforeFetch()) {

        const input = document.getElementById('csvFileInput');
        const file = input.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = async function (e) {
                const csvData = e.target.result;
                const jsonArray = convertCsvToJsonFunction(csvData);
                StartFuncAfterFetch({ inFromFetch: jsonArray });
            };

            reader.readAsText(file);
        } else {
            alert('Please select a CSV file.');
        };
    };

};
let StartFunc = async () => {

    const input = document.getElementById('xlsxFileInput');
    const file = input.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const jsonData = convertXlsxToJson(workbook);
                // displayTable("jsonData:",jsonData);
                StartFuncAfterFetch({ inFromFetch: jsonData });
                console.log("jsonData:---", jsonData);
            };

            reader.readAsArrayBuffer(file);
        }else {
            alert('Please select a Xlsx file.');
        };
};

function convertXlsxToJson(workbook) {
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    const headers = jsonData[0];
    const formattedData = [];

    for (let i = 1; i < jsonData.length; i++) {
        const entry = {};
        for (let j = 0; j < headers.length; j++) {
            entry[headers[j]] = jsonData[i][j];
        }
        formattedData.push(entry);
    }

    return formattedData;
}



export { StartFunc };