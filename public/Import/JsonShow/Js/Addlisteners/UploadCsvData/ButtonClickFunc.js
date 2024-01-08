import { StartFunc as StartFuncCheckBeforeFetch } from "./CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";


let StartFunc = async () => {

    const input = document.getElementById('xlsxFileInput');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const content = e.target.result;

            try {
                const jsonData = JSON.parse(content);
                StartFuncAfterFetch({ inFromFetch: jsonData });

            } catch (error) {
                console.error('Error parsing JSON:', error);
                alert('Error parsing JSON file. Please make sure it is a valid JSON file.');
            }
        };

        reader.readAsText(file);
    }
    console.log("file", file);



};



export { StartFunc };