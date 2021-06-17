function displayFileName()
{
    var fileName = '';
    fileName = document.getElementById("loadFileInput").files[0].name;

    document.getElementById("fileNameSpan").innerHTML = fileName;
}

function copyAddress()
{
    if(document.getElementById('workAtCopyAddressInput').checked)
    {
        document.getElementById('workAtNameInput').value = document.getElementById('submitNameInput').value;
        document.getElementById('workAtStreetInput').value = document.getElementById('submitStreetInput').value;
        document.getElementById('workAtCityInput').value = document.getElementById('submitCityInput').value;
        document.getElementById('workAtStateInput').value = document.getElementById('submitStateInput').value;
        document.getElementById('workAtZipInput').value = document.getElementById('submitZipInput').value;
        document.getElementById('workAtTelephoneNumberInput').value = document.getElementById('submitTelephoneNumberInput').value;
    } else {
        document.getElementById('workAtNameInput').value = '';
        document.getElementById('workAtStreetInput').value = '';
        document.getElementById('workAtCityInput').value = '';
        document.getElementById('workAtStateInput').value = '';
        document.getElementById('workAtZipInput').value = '';
        document.getElementById('workAtTelephoneNumberInput').value = '';
    }
}

function escape(str) {
    return str
        .replace(/[\\]/g, '\\\\')
        .replace(/[\"]/g, '\\\"')
        .replace(/[\/]/g, '\\/')
        .replace(/[\b]/g, '\\b')
        .replace(/[\f]/g, '\\f')
        .replace(/[\n]/g, '\\n')
        .replace(/[\r]/g, '\\r')
        .replace(/[\t]/g, '\\t');
}

function loadContractDetails() {
    let input = document.getElementById("loadFileInput");
    let file = input.files[0];
    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
        const obj = JSON.parse(reader.result);
        document.getElementById("invoiceDateInput").value = obj.ticketDate;
        document.getElementById("invoiceNumberInput").value = obj.ticketNumber;
        document.getElementById("invoiceTechNameInput").value = obj.serviceTechName;
        document.getElementById("invoiceTechNumberInput").value = obj.serviceTechNumber;
        document.getElementById("invoiceTypeOfWorkSewerInput").checked = obj.towSewer;
        document.getElementById("invoiceTypeOfWorkPlumbingInput").checked = obj.towPlumbing;
        document.getElementById("invoiceTypeOfWorkPumpingInput").checked = obj.towPumping;
        document.getElementById("invoiceTypeOfWorkIndustrialInput").checked = obj.towIndustrial;
        document.getElementById("invoiceTypeOfWorkExcavationInput").checked = obj.towExcavation;
        document.getElementById("invoiceTypeOfWorkDrainTileInput").checked = obj.towDrainTile;
        document.getElementById("invoiceCustomerClassResidentialInput").checked = obj.customerClassResidential;
        document.getElementById("invoiceCustomerClassCommercialInput").checked = obj.customerClassCommercial;
        document.getElementById("submitNameInput").value = obj.submittedName;
        document.getElementById("submitStreetInput").value = obj.submittedStreet;
        document.getElementById("submitCityInput").value = obj.submittedCity;
        document.getElementById("submitStateInput").value = obj.submittedState;
        document.getElementById("submitZipInput").value = obj.submittedZip;
        document.getElementById("submitTelephoneNumberInput").value = obj.submittedTelephone;
        document.getElementById("submitNumberInput").value = obj.customerNumber;
        document.getElementById("submitPoNumberInput").value = obj.poNumber;
        document.getElementById("discountAmountInput").value = obj.discountAmount;
        document.getElementById("discountDescriptionInput").value = obj.discountDescription;
        document.getElementById("workAtCopyAddressInput").checked = obj.copyAddress;
        document.getElementById("workAtNameInput").value = obj.workAtName;
        document.getElementById("workAtStreetInput").value = obj.workAtStreet;
        document.getElementById("workAtCityInput").value = obj.workAtCity;
        document.getElementById("workAtStateInput").value = obj.workAtState;
        document.getElementById("workAtZipInput").value = obj.workAtZip;
        document.getElementById("workAtTelephoneNumberInput").value = obj.workAtTelephone;
        document.getElementById("serviceDescriptionInput").value = obj.proposalDetails;
        document.getElementById("serviceCostsTotalInput").value = obj.cost;
        document.getElementById("serviceCostsPercentExecutionInput").value = obj.paymentExecution;
        document.getElementById("serviceCostsPercentStartInput").value = obj.paymentStart;
        document.getElementById("serviceDatesStartInput").value = obj.startingDate;
        document.getElementById("serviceDatesCompleteInput").value = obj.completionDate;
        document.getElementById("serviceDatesEstimateValidInput").value = obj.validityDays;
        document.getElementById("guaranteeExtendedInput").checked = obj.guarantee;
        document.getElementById("guaranteeConditionsInput").value = obj.guaranteeConditions;
        document.getElementById("guaranteeReasonInput").value = obj.noGuaranteeReason;
    };

    reader.onerror = function() {
        console.log(reader.error);
    };
}

function saveContractDetails(currentTime)
{
    let ticketDate = document.getElementById("invoiceDateInput");
    let ticketNumber = document.getElementById("invoiceNumberInput");
    let submittedName = document.getElementById("submitNameInput");

    if((ticketDate.value.length == 0) || (ticketNumber.value.length == 0) || (submittedName.value.length == 0))
    {
        alert("Please populate Invoice Date, Invoice Number and Customer Name to Save.");
        return;
    }

    let data = '{'
    data += ' "ticketDate" : "' + document.getElementById("invoiceDateInput").value + '",';
    data += ' "ticketNumber" : "' + document.getElementById("invoiceNumberInput").value + '",';
    data += ' "serviceTechName" : "' + escape(document.getElementById("invoiceTechNameInput").value) + '",';
    data += ' "serviceTechNumber" : "' + document.getElementById("invoiceTechNumberInput").value + '",';
    data += ' "towSewer" : ' + document.getElementById("invoiceTypeOfWorkSewerInput").checked + ',';
    data += ' "towPlumbing" : ' + document.getElementById("invoiceTypeOfWorkPlumbingInput").checked + ',';
    data += ' "towPumping" : ' + document.getElementById("invoiceTypeOfWorkPumpingInput").checked + ',';
    data += ' "towIndustrial" : ' + document.getElementById("invoiceTypeOfWorkIndustrialInput").checked + ',';
    data += ' "towExcavation" : ' + document.getElementById("invoiceTypeOfWorkExcavationInput").checked + ',';
    data += ' "towDrainTile" : ' + document.getElementById("invoiceTypeOfWorkDrainTileInput").checked + ',';
    data += ' "customerClassResidential" : ' + document.getElementById("invoiceCustomerClassResidentialInput").checked + ',';
    data += ' "customerClassCommercial" : ' + document.getElementById("invoiceCustomerClassCommercialInput").checked + ',';
    data += ' "submittedName" : "' + escape(document.getElementById("submitNameInput").value) + '",';
    data += ' "submittedStreet" : "' + escape(document.getElementById("submitStreetInput").value) + '",';
    data += ' "submittedCity" : "' + escape(document.getElementById("submitCityInput").value) + '",';
    data += ' "submittedState" : "' + escape(document.getElementById("submitStateInput").value) + '",';
    data += ' "submittedZip" : "' + document.getElementById("submitZipInput").value + '",';
    data += ' "submittedTelephone" : "' + document.getElementById("submitTelephoneNumberInput").value + '",';
    data += ' "customerNumber" : "' + document.getElementById("submitNumberInput").value + '",';
    data += ' "poNumber" : "' + document.getElementById("submitPoNumberInput").value + '",';
    data += ' "discountAmount" : "' + document.getElementById("discountAmountInput").value + '",';
    data += ' "discountDescription" : "' + escape(document.getElementById("discountDescriptionInput").value) + '",';
    data += ' "copyAddress" : ' + document.getElementById("workAtCopyAddressInput").checked + ',';
    data += ' "workAtName" : "' + escape(document.getElementById("workAtNameInput").value) + '",';
    data += ' "workAtStreet" : "' + escape(document.getElementById("workAtStreetInput").value) + '",';
    data += ' "workAtCity" : "' + escape(document.getElementById("workAtCityInput").value) + '",';
    data += ' "workAtState" : "' + escape(document.getElementById("workAtStateInput").value) + '",';
    data += ' "workAtZip" : "' + document.getElementById("workAtZipInput").value + '",';
    data += ' "workAtTelephone" : "' + document.getElementById("workAtTelephoneNumberInput").value + '",';
    data += ' "proposalDetails" : "' + escape(document.getElementById("serviceDescriptionInput").value) + '",';
    data += ' "cost" : "' + document.getElementById("serviceCostsTotalInput").value + '",';
    data += ' "paymentExecution" : "' + document.getElementById("serviceCostsPercentExecutionInput").value + '",';
    data += ' "paymentStart" : "' + document.getElementById("serviceCostsPercentStartInput").value + '",';
    data += ' "startingDate" : "' + document.getElementById("serviceDatesStartInput").value + '",';
    data += ' "completionDate" : "' + document.getElementById("serviceDatesCompleteInput").value + '",';
    data += ' "validityDays" : "' + document.getElementById("serviceDatesEstimateValidInput").value + '", ';
    data += ' "guarantee" : ' + document.getElementById("guaranteeExtendedInput").checked + ', ';
    data += ' "guaranteeConditions" : "' + escape(document.getElementById("guaranteeConditionsInput").value) + '", ';
    data += ' "noGuaranteeReason" : "' + escape(document.getElementById("guaranteeReasonInput").value) + '"';
    data += '}';

    let filename = ticketDate.value.replaceAll('-', '') + '-' + ticketNumber.value + '-' + submittedName.value.replaceAll(' ', '_') + '-Details-' + currentTime + '.json';
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(data); //JSON.stringify(document.getElementById("name_input"exportObj));
    if (document.getElementById("detailsDownloadLink") !== null)
    {
        document.getElementById("downloadContractDiv").removeChild(document.getElementById("detailsDownloadLink"));
    }
    let downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", filename);
    downloadAnchorNode.setAttribute("style", "font-size:13pt;");
    downloadAnchorNode.setAttribute("id", "detailsDownloadLink");
    downloadAnchorNode.innerHTML = "Download Contract Details...";
    document.getElementById("downloadContractDiv").appendChild(downloadAnchorNode); // required for firefox
}

function generateInvoice(currentTime)
{
    let pdf = new jsPDF('p', 'mm', 'letter');

    let ticketDate = document.getElementById("invoiceDateInput");
    let ticketNumber = document.getElementById("invoiceNumberInput");
    let submittedName = document.getElementById("submitNameInput");
    let iX = 0;
    let iY = 0;

    if((ticketDate.value.length == 0) || (ticketNumber.value.length == 0) || (submittedName.value.length == 0))
    {
        alert("Please populate Invoice Date, Invoice Number and Customer Name - To Generate Invoice");
        return;
    }

    if(document.getElementById("iosDevice").checked === true)
    {
        iX = 0;
        iY = 0;
    }

    pdf.setFont("courier", "normal", "normal");

    pdf.setFontSize(12);
    let serviceDate = document.getElementById("invoiceDateInput").value;
    let field = serviceDate.split("-");
    let year = field[0] % 1000;
    let month = field[1];
    let day = field[2];
    pdf.text(month.toString(), 152 + iX, 3 + iY);
    pdf.text(day.toString(), 161 + iX, 3 + iY);
    pdf.text(year.toString(), 169 + iX, 3 + iY);

    pdf.setFontSize(10);
    // Technician Name
    pdf.text(document.getElementById("invoiceTechNameInput").value, 151 + iX, 10 + iY);

    // Customer Name
    pdf.text(document.getElementById("submitNameInput").value, 7 + iX, 43 + iY);

    // Customer Number
    pdf.text(document.getElementById("submitNumberInput").value, 118 + iX, 43 + iY);

    pdf.setFontSize(18);
    // Invoice Number
    pdf.text(document.getElementById("invoiceNumberInput").value, 169 + iX, 22 + iY);

    // Technician Number
    pdf.text(document.getElementById("invoiceTechNumberInput").value, 198 + iX, 11 + iY);

    // Customer Class - Residential
    if(document.getElementById("invoiceCustomerClassResidentialInput").checked)
    {
        pdf.text("X", 153 + iX, 43 + iY);
    }

    // Customer Class - Commercial
    if(document.getElementById("invoiceCustomerClassCommercialInput").checked)
    {
        pdf.text("X", 189 + iX, 43 + iY);
    }

    pdf.setFontSize(10);
    // Customer Street
    pdf.text(document.getElementById("submitStreetInput").value, 7 + iX, 50 + iY);

    // Type of Work - Sewer & Drain
    if(document.getElementById("invoiceTypeOfWorkSewerInput").checked)
    {
        pdf.text("X", 171 + iX, 29 + iY);
    }

    // Type of Work - Plumbing
    if(document.getElementById("invoiceTypeOfWorkPlumbingInput").checked)
    {
        pdf.text("X", 192 + iX, 29 + iY);
    }

    // Type of Work - Pumping
    if(document.getElementById("invoiceTypeOfWorkPumpingInput").checked)
    {
        pdf.text("X", 211 + iX, 29 + iY);
    }

    // Type of Work - Industrial
    if(document.getElementById("invoiceTypeOfWorkIndustrialInput").checked)
    {
        pdf.text("X", 171 + iX, 34 + iY);
    }

    // Type of Work - Excavation
    if(document.getElementById("invoiceTypeOfWorkExcavationInput").checked)
    {
        pdf.text("X", 192 + iX, 34 + iY);
    }

    // Type of Work - Drain Tile
    if(document.getElementById("invoiceTypeOfWorkDrainTileInput").checked)
    {
        pdf.text("X", 211 + iX, 34 + iY);
    }

    // Customer City
    pdf.text(document.getElementById("submitCityInput").value, 7 + iX, 57 + iY);

    // Customer State
    pdf.text(document.getElementById("submitStateInput").value, 76 + iX, 57 + iY);

    // Customer ZIP
    pdf.text(document.getElementById("submitZipInput").value, 102 + iX, 57 + iY);

    // Customer Phone Number
    pdf.text(document.getElementById("submitTelephoneNumberInput").value, 129 + iX, 57 + iY);

    // PO Number/Authorization
    pdf.text(document.getElementById("submitPoNumberInput").value, 176 + iX, 57 + iY);

    // Service Street
    pdf.text(document.getElementById("workAtStreetInput").value, 7 + iX, 64 + iY);

    // Service City
    pdf.text(document.getElementById("workAtCityInput").value, 129 + iX, 64 + iY);

    // Service State
    pdf.text(document.getElementById("workAtStateInput").value, 176 + iX, 64 + iY);

    // Service ZIP
    pdf.text(document.getElementById("workAtZipInput").value, 199 + iX, 64 + iY);

    // Approximate Start and Completion Date
    let startDate = new Date(document.getElementById("serviceDatesStartInput").value);
    let completeDate = new Date(document.getElementById("serviceDatesCompleteInput").value);

    let startDateString = (startDate.getUTCMonth() + 1) + "/" + startDate.getUTCDate() + "/" + startDate.getUTCFullYear();
    let completeDateString = (completeDate.getUTCMonth() + 1) + "/" + completeDate.getUTCDate() + "/" + completeDate.getUTCFullYear();

    pdf.text(startDateString, 121 + iX, 88 + iY);
    pdf.text(completeDateString, 9 + iX, 93 + iY);

    let description = document.getElementById("serviceDescriptionInput").value.replace(/[\n]/g, " ").replace(/[\n]/g, " ").replace(/[\r]/g, " ");

    let a = 0;
    let b = (description.substring(a).length < 80) ? (a + 80) : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? a + 80 : description.substring(a, a + 80).lastIndexOf(" "));
    pdf.text(description.substring(a, b), 7 + iX, 98 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 7 + iX, 103 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 7 + iX, 107 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 7 + iX, 112 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 7 + iX, 117 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 7 + iX, 121 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 7 + iX, 125 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 7 + iX, 130 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 7 + iX, 135 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 7 + iX, 139 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 7 + iX, 144 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 7 + iX, 148 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 7 + iX, 153 + iY);

    // Total Cost
    pdf.setFontSize(8);
    let totalCost = parseFloat(document.getElementById("serviceCostsTotalInput").value) || 0;
    pdf.text(totalCost.toFixed(2).toString(), 196 + iX, 102 + iY);

    pdf.setFontSize(10);
    pdf.text(document.getElementById("discountDescriptionInput").value, 7 + iX, 169.5 + iY);
    //pdf.text("Discount Line 2 -", 7, 174); - Unused
    //pdf.text("Discount Line 3 -", 7, 178.5); - Unused

    let discountAmount = parseFloat(document.getElementById("discountAmountInput").value) || 0;
    if(discountAmount > 0)
    {
        pdf.text(discountAmount.toFixed(2).toString(), 145 + iX, 169.5 + iY);
    }
    //pdf.text("2000.00", 145, 174); - Unused
    //pdf.text("3000.00", 145, 178.5); - Unused

    if(discountAmount > 0)
    {
        pdf.text(discountAmount.toFixed(2).toString(), 188 + iX, 174 + iY);
    }
    pdf.text((totalCost - discountAmount).toFixed(2).toString(), 188 + iX, 204 + iY);

    if(document.getElementById("guaranteeExtendedInput").checked)
    {
        pdf.text("X", 5 + iX, 263 + iY);
    }
    pdf.text(document.getElementById("guaranteeConditionsInput").value, 54 + iX, 263 + iY);
    pdf.text(document.getElementById("guaranteeReasonInput").value, 4 + iX, 269 + iY);

    let filename = ticketDate.value.replaceAll('-', '') + '-' + ticketNumber.value + '-' + submittedName.value.replaceAll(' ', '_') + '-Invoice-' + currentTime + '.pdf';
    let blobPDF =  new Blob([ pdf.output('blob') ], { type : 'application/pdf' });
    let downloadAnchorNode = document.createElement('a');
    if (invoiceObjectUrl !== null)
    {
        window.URL.revokeObjectURL(invoiceObjectUrl);
        document.getElementById("downloadInvoiceDiv").removeChild(document.getElementById("invoiceDownloadLink"));
    }
    invoiceObjectUrl = window.URL.createObjectURL(blobPDF);
    downloadAnchorNode.setAttribute("href", invoiceObjectUrl);
    downloadAnchorNode.setAttribute("download", filename);
    downloadAnchorNode.setAttribute("style", "font-size:13pt;");
    downloadAnchorNode.setAttribute("id", "invoiceDownloadLink");
    downloadAnchorNode.innerHTML = "Download Invoice...";
    document.getElementById("downloadInvoiceDiv").appendChild(downloadAnchorNode); // required for firefox
}

function generateProposal(currentTime)
{
    pdf = new jsPDF('p', 'mm', 'letter');
    let iX = 0;
    let iY = 0;

    let ticketDate = document.getElementById("invoiceDateInput");
    let ticketNumber = document.getElementById("invoiceNumberInput");
    let submittedName = document.getElementById("submitNameInput");

    if((ticketDate.value.length == 0) || (ticketNumber.value.length == 0) || (submittedName.value.length == 0))
    {
        alert("Please populate Invoice Date, Invoice Number and Customer Name - To Generate Proposal");
        return;
    }

    if(document.getElementById("iosDevice").checked === true)
    {
        iX = 0;
        iY = 0;
    }

    pdf.setFont("courier", "normal", "normal");

    pdf.setFontSize(8);
    let invoiceDate = new Date(document.getElementById("invoiceDateInput").value);
    let invoiceDateString = (invoiceDate.getUTCMonth() + 1) + "/" + invoiceDate.getUTCDate() + "/" + invoiceDate.getUTCFullYear();

    pdf.text(invoiceDateString, 178 + iX, 2 + iY);

    pdf.setFontSize(14);
    pdf.text(document.getElementById("invoiceNumberInput").value, 191 + iX, 11 + iY);

    pdf.setFontSize(10);
    pdf.text(document.getElementById("submitNameInput").value, 32 + iX, 40 + iY);
    pdf.text(document.getElementById("submitStreetInput").value, 32 + iX, 45.25 + iY);
    pdf.text(document.getElementById("submitCityInput").value, 32 + iX, 49.5 + iY);
    pdf.text(document.getElementById("submitStateInput").value, 32 + iX, 53.75 + iY);
    pdf.text(document.getElementById("submitZipInput").value, 91 + iX, 53.75 + iY);
    pdf.text(document.getElementById("submitTelephoneNumberInput").value, 48 + iX, 58 + iY);

    pdf.text(document.getElementById("workAtNameInput").value, 120 + iX, 40 + iY);
    pdf.text(document.getElementById("workAtStreetInput").value, 120 + iX, 45.25 + iY);
    pdf.text(document.getElementById("workAtCityInput").value, 120 + iX, 49.5 + iY);
    pdf.text(document.getElementById("workAtStateInput").value, 120 + iX, 53.75 + iY);
    pdf.text(document.getElementById("workAtZipInput").value, 179 + iX, 53.75 + iY);
    pdf.text(document.getElementById("workAtTelephoneNumberInput").value, 138 + iX, 58 + iY);

    let description = document.getElementById("serviceDescriptionInput").value.replace(/[\n]/g, " ").replace(/[\n]/g, " ").replace(/[\r]/g, " ");

    let a = 0;
    let b = (description.substring(a).length < 80) ? (a + 80) : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? a + 80 : description.substring(a, a + 80).lastIndexOf(" "));
    pdf.text(description.substring(a, b), 22 + iX, 72 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 22 + iX, 76.25 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 22 + iX, 80.5 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 22 + iX, 85.75 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 22 + iX, 89.5 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 22 + iX, 94.75 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 22 + iX, 98.5 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 22 + iX, 102.75 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 22 + iX, 108 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 22 + iX, 112.25 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 22 + iX, 117 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 22 + iX, 121 + iY);

    a = (b === (a + 80)) ? b : b + 1;
    b = a + ((description.substring(a).length < 80) ? 80 : ((description.substring(a, a + 80).lastIndexOf(" ") === -1) ? 80 : description.substring(a, a + 80).lastIndexOf(" ")));
    pdf.text(description.substring(a, b), 22 + iX, 125.5 + iY);

    let totalCost = parseFloat(document.getElementById("serviceCostsTotalInput").value) || 0;
    let discountAmount = parseFloat(document.getElementById("discountAmountInput").value) || 0;
    let finalCost = totalCost - discountAmount;

    pdf.text((finalCost).toFixed(2).toString(), 166 + iX, 135 + iY);

    pdf.text(document.getElementById("serviceCostsPercentExecutionInput").value, 45 + iX, 145 + iY);
    pdf.text(document.getElementById("serviceCostsPercentStartInput").value, 45 + iX, 151 + iY);

    let executePercent = parseFloat(document.getElementById("serviceCostsPercentExecutionInput").value) || 0;
    let startPercent = parseFloat(document.getElementById("serviceCostsPercentStartInput").value) || 0;

    let executeAmount = finalCost * (executePercent / 100.0);
    let startAmount = finalCost * (startPercent / 100.0);
    pdf.text(executeAmount.toFixed(2).toString(), 79, 145);
    pdf.text(startAmount.toFixed(2).toString(), 79, 151);

    let startDate = new Date(document.getElementById("serviceDatesStartInput").value);
    let completeDate = new Date(document.getElementById("serviceDatesCompleteInput").value);

    let startDateString = (startDate.getUTCMonth() + 1) + "/" + startDate.getUTCDate() + "/" + startDate.getUTCFullYear();
    let completeDateString = (completeDate.getUTCMonth() + 1) + "/" + completeDate.getUTCDate() + "/" + completeDate.getUTCFullYear();
    pdf.text(startDateString, 75 + iX, 162 + iY);
    pdf.text(completeDateString, 172 + iX, 162 + iY);

    pdf.text(document.getElementById("serviceDatesEstimateValidInput").value, 124 + iX, 232 + iY);

    let filename = ticketDate.value.replaceAll('-', '') + '-' + ticketNumber.value + '-' + submittedName.value.replaceAll(' ', '_') + '-Proposal-' + currentTime + '.pdf';
    let blobPDF =  new Blob([ pdf.output('blob') ], { type : 'application/pdf' });
    let downloadAnchorNode = document.createElement('a');
    if (proposalObjectUrl !== null)
    {
        window.URL.revokeObjectURL(proposalObjectUrl);
        document.getElementById("downloadProposalDiv").removeChild(document.getElementById("proposalDownloadLink"));
    }
    proposalObjectUrl = window.URL.createObjectURL(blobPDF);
    downloadAnchorNode.setAttribute("href", proposalObjectUrl);
    downloadAnchorNode.setAttribute("download", filename);
    downloadAnchorNode.setAttribute("style", "font-size:13pt;");
    downloadAnchorNode.setAttribute("id", "proposalDownloadLink");
    downloadAnchorNode.innerHTML = "Download Proposal...";
    document.getElementById("downloadProposalDiv").appendChild(downloadAnchorNode); // required for firefox

}

function generateForms()
{
    let currentTime = Date.now();
    let ticketDate = document.getElementById("invoiceDateInput");
    let ticketNumber = document.getElementById("invoiceNumberInput");
    let submittedName = document.getElementById("submitNameInput");

    if((ticketDate.value.length == 0) || (ticketNumber.value.length == 0) || (submittedName.value.length == 0))
    {
        alert("Please populate Invoice Date, Invoice Number and Customer Name - To Generate Links");
        return;
    }
    saveContractDetails(currentTime);
    generateInvoice(currentTime);
    generateProposal(currentTime);
}