import { StartFunc as StartFuncCheckBeforeFetch } from "./CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async () => {
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

let convertCsvToJsonFunction = (csvData) => {
    const parsedData = Papa.parse(csvData, { header: true });
    console.log("parsedData:",parsedData);

    const selectedData = parsedData.data.map(({
        'Jobno': Jobno, 'Creation Date': CreationDate,
        'Customer Name': CustomerName, Address, 'Mobile No': MobileNo,
        'Contact No': ContactNo, ModelName, 'Job Classification': JobClassification, ProductGroupName, 'Warranty Type': WarrantyType, 'Agent Remarks': AgentRemarks, CallFromNo, Panasonic
    }) => ({ Jobno, CreationDate, CustomerName, Address, MobileNo, ContactNo, ModelName, JobClassification, ProductGroupName, WarrantyType, AgentRemarks, CallFromNo, Panasonic }));

    return selectedData;
}

// let convertCsvToJsonFunction = (csvData) => {
//     const parsedData = Papa.parse(csvData, { header: true });
//     return parsedData.data;
// };

export { StartFunc };