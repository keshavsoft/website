let StartFunc = async ({ inCsvJsonData }) => {

    let formData = {};

    formData.inDataToInsert = inCsvJsonData

    return await formData;
};



export { StartFunc };