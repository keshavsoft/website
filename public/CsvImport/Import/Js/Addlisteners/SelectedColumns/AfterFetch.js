import { StartFunc as StartFuncTableHead } from "./TableHead.js";

let StartFunc = ({ inFromFetch }) => {

    jFLocalPrepareHeaderForDataOnly(inFromFetch);
    var $table = $('#table');

    $table.bootstrapTable({ data: inFromFetch });
};

let jFLocalPrepareHeaderForDataOnly = (inFromFetch) => {
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);
    StartFuncTableHead({ FromFetch: inFromFetch, tableHeadRowId: jVarLocaltableHeadRow });
};

export { StartFunc };