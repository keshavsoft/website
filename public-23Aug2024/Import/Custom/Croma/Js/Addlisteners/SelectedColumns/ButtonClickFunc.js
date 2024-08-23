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
    console.log("parsedData:", parsedData);

    const selectedData = parsedData.data.map(({
        'ExternalReferenceID': Jobno, 'Servify Call Creation Date': CreationDate, 'Servify Status': Status,
        'Customer Name': CustomerName, 'Customer Address': Address, 'Customer Mobile No': MobileNo,
        'Customer Alternate Mobile No.': ContactNo, 'Product Name': ModelName, 'Delivery Type': JobClassification, 'Product Category': ProductGroupName, 'Warranty': WarrantyType, 'SubServiceType': JobType, 'PinCode': Distancetype, 'Last Visit Remarks': AgentRemarks, 'Created By': DealerName, CallFromNo, Brand
    }) => ({ Jobno, CreationDate, Status, CustomerName, Address, MobileNo, ContactNo, ModelName, JobClassification, ProductGroupName, WarrantyType, JobType, Distancetype, AgentRemarks, DealerName, CallFromNo, Brand }));

    return selectedData;
}

// let convertCsvToJsonFunction = (csvData) => {
//     const parsedData = Papa.parse(csvData, { header: true });
//     return parsedData.data;
// };

export { StartFunc };