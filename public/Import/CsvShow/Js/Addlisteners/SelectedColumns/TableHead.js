const StartFunc = () => {
    let jVarLocalHtmlId = 'tableHeadRow';
    let tableHeadRowId = document.getElementById(jVarLocalHtmlId);
    tableHeadRowId.innerHTML = "";
    JfjobNumber({ tableHeadRowId });
    JfCreationDate({ tableHeadRowId });
    JfCustomerName({ tableHeadRowId });
    JfAddress({ tableHeadRowId });
    JfMobileNo({ tableHeadRowId });
    JfContactNo({ tableHeadRowId });
    JfModelName({ tableHeadRowId });
    JfJobClassification({ tableHeadRowId });
    JfProductGroupName({ tableHeadRowId });
    JfWarrantyType({ tableHeadRowId });
    JfAgentRemarks({ tableHeadRowId });
    JfCallFromNo({ tableHeadRowId });
    JfPanasonic({ tableHeadRowId });

};

const JfjobNumber = ({ FromFetch, tableHeadRowId }) => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.dataset.field = "Jobno";
    jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocalNewTh.innerHTML = "Job no";
    tableHeadRowId.appendChild(jVarLocalNewTh);
};
const JfCreationDate = ({ FromFetch, tableHeadRowId }) => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.dataset.field = "CreationDate";
    jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocalNewTh.innerHTML = "CreationDate";
    tableHeadRowId.appendChild(jVarLocalNewTh);
};

const JfCustomerName = ({ FromFetch, tableHeadRowId }) => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.dataset.field = "CustomerName";
    jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocalNewTh.innerHTML = "CustomerName";
    tableHeadRowId.appendChild(jVarLocalNewTh);
};

const JfAddress = ({ FromFetch, tableHeadRowId }) => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.dataset.field = "Address";
    jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocalNewTh.innerHTML = "Address";
    tableHeadRowId.appendChild(jVarLocalNewTh);
};

const JfMobileNo = ({ FromFetch, tableHeadRowId }) => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.dataset.field = "MobileNo";
    jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocalNewTh.innerHTML = "MobileNo";
    tableHeadRowId.appendChild(jVarLocalNewTh);
};

const JfContactNo = ({ FromFetch, tableHeadRowId }) => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.dataset.field = "ContactNo";
    jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocalNewTh.innerHTML = "ContactNo";
    tableHeadRowId.appendChild(jVarLocalNewTh);
};

const JfModelName = ({ FromFetch, tableHeadRowId }) => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.dataset.field = "ModelName";
    jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocalNewTh.innerHTML = "ModelName";
    tableHeadRowId.appendChild(jVarLocalNewTh);
};

const JfJobClassification = ({ FromFetch, tableHeadRowId }) => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.dataset.field = "JobClassification";
    jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocalNewTh.innerHTML = "JobClassification";
    tableHeadRowId.appendChild(jVarLocalNewTh);
};

const JfProductGroupName = ({ FromFetch, tableHeadRowId }) => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.dataset.field = "ProductGroupName";
    jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocalNewTh.innerHTML = "ProductGroupName";
    tableHeadRowId.appendChild(jVarLocalNewTh);
};

const JfWarrantyType = ({ FromFetch, tableHeadRowId }) => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.dataset.field = "WarrantyType";
    jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocalNewTh.innerHTML = "WarrantyType";
    tableHeadRowId.appendChild(jVarLocalNewTh);
};

const JfAgentRemarks = ({ FromFetch, tableHeadRowId }) => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.dataset.field = "AgentRemarks";
    jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocalNewTh.innerHTML = "AgentRemarks";
    tableHeadRowId.appendChild(jVarLocalNewTh);
};

const JfCallFromNo = ({ FromFetch, tableHeadRowId }) => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.dataset.field = "CallFromNo";
    jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocalNewTh.innerHTML = "CallFromNo";
    tableHeadRowId.appendChild(jVarLocalNewTh);
};

const JfPanasonic = ({ FromFetch, tableHeadRowId }) => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.dataset.field = "Panasonic";
    jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocalNewTh.innerHTML = "Panasonic";
    tableHeadRowId.appendChild(jVarLocalNewTh);
};

export { StartFunc };