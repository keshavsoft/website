let StartFunc = () => {
    if (jFLocalHtmlId() === false) {
        return false;
    };

    return true;
};

let jFLocalHtmlId = () => {
    let jVarLocalHtmlId = "csvFileInput";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalFolderName = jVarCreateFolderInputId.value;

    if (jVarLocalFolderName === "") {
        jVarCreateFolderInputId.classList.add("is-invalid");
        jVarCreateFolderInputId.focus();
        return false;
    };

    if (jVarCreateFolderInputId.classList.contains("is-invalid")) {
        jVarCreateFolderInputId.classList.remove("is-invalid");

        jVarCreateFolderInputId.classList.add("is-valid");
    };

    return true;
};




export { StartFunc };