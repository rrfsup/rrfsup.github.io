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

function loadData() {
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

function saveData()
{
    let ticketDate = document.getElementById("invoiceDateInput");
    let ticketNumber = document.getElementById("invoiceNumberInput");
    let submittedName = document.getElementById("submitNameInput");

    if((ticketDate.value.length == 0) || (ticketNumber.value.length == 0) || (submittedName.value.length == 0))
    {
        alert("Please populate Invoice Date, Invoice Number and Customer Name to Save.");
        return;
    }
    let filename = ticketDate.value.replaceAll('-', '') + '-' + ticketNumber.value + '-' + submittedName.value.replaceAll(' ', '_') + '-Details';

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

    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(data); //JSON.stringify(document.getElementById("name_input"exportObj));
    let downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", filename + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function generateInvoice() {
    const { jsPDF } = window.jspdf;
    let pdf = new jsPDF('p', 'mm', 'letter');

    let ticketDate = document.getElementById("invoiceDateInput");
    let ticketNumber = document.getElementById("invoiceNumberInput");
    let submittedName = document.getElementById("submitNameInput");

    if((ticketDate.value.length == 0) || (ticketNumber.value.length == 0) || (submittedName.value.length == 0))
    {
        alert("Please populate Invoice Date, Invoice Number and Customer Name - To Generate Invoice");
        return;
    }

    pdf.setFont("courier", "normal", "normal");

    pdf.setFontSize(12);
    let serviceDate = document.getElementById("invoiceDateInput").value;
    let field = serviceDate.split("-");
    let year = field[0] % 1000;
    let month = field[1];
    let day = field[2];
    pdf.text(month.toString(), 152, 3);
    pdf.text(day.toString(), 161, 3);
    pdf.text(year.toString(), 169, 3);

    pdf.setFontSize(10);
    // Technician Name
    pdf.text(document.getElementById("invoiceTechNameInput").value, 151, 10);

    // Customer Name
    pdf.text(document.getElementById("submitNameInput").value, 7, 43);

    // Customer Number
    pdf.text(document.getElementById("submitNumberInput").value, 118, 43);

    pdf.setFontSize(18);
    // Invoice Number
    pdf.text(document.getElementById("invoiceNumberInput").value, 169, 22);

    // Technician Number
    pdf.text(document.getElementById("invoiceTechNumberInput").value, 198, 11);

    // Customer Class - Residential
    if(document.getElementById("invoiceCustomerClassResidentialInput").checked)
    {
        pdf.text("X", 153, 43);
    }

    // Customer Class - Commercial
    if(document.getElementById("invoiceCustomerClassCommercialInput").checked)
    {
        pdf.text("X", 189, 43);
    }

    pdf.setFontSize(10);
    // Customer Street
    pdf.text(document.getElementById("submitStreetInput").value, 7, 50);

    // Type of Work - Sewer & Drain
    if(document.getElementById("invoiceTypeOfWorkSewerInput").checked)
    {
        pdf.text("X", 171, 29);
    }

    // Type of Work - Plumbing
    if(document.getElementById("invoiceTypeOfWorkPlumbingInput").checked)
    {
        pdf.text("X", 192, 29);
    }

    // Type of Work - Pumping
    if(document.getElementById("invoiceTypeOfWorkPumpingInput").checked)
    {
        pdf.text("X", 211, 29);
    }

    // Type of Work - Industrial
    if(document.getElementById("invoiceTypeOfWorkIndustrialInput").checked)
    {
        pdf.text("X", 171, 34);
    }

    // Type of Work - Excavation
    if(document.getElementById("invoiceTypeOfWorkExcavationInput").checked)
    {
        pdf.text("X", 192, 34);
    }

    // Type of Work - Drain Tile
    if(document.getElementById("invoiceTypeOfWorkDrainTileInput").checked)
    {
        pdf.text("X", 211, 34);
    }

    // Customer City
    pdf.text(document.getElementById("submitCityInput").value, 7, 57);

    // Customer State
    pdf.text(document.getElementById("submitStateInput").value, 76, 57);

    // Customer ZIP
    pdf.text(document.getElementById("submitZipInput").value, 102, 57);

    // Customer Phone Number
    pdf.text(document.getElementById("submitTelephoneNumberInput").value, 129, 57);

    // PO Number/Authorization
    pdf.text(document.getElementById("submitPoNumberInput").value, 176, 57);

    // Service Street
    pdf.text(document.getElementById("workAtStreetInput").value, 7, 64);

    // Service City
    pdf.text(document.getElementById("workAtCityInput").value, 129, 64);

    // Service State
    pdf.text(document.getElementById("workAtStateInput").value, 176, 64);

    // Service ZIP
    pdf.text(document.getElementById("workAtZipInput").value, 199, 64);

    // Approximate Start and Completion Date
    let startDate = new Date(document.getElementById("serviceDatesStartInput").value);
    let completeDate = new Date(document.getElementById("serviceDatesCompleteInput").value);

    let startDateString = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();
    let completeDateString = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();

    pdf.text(startDateString, 121, 88);
    pdf.text(completeDateString, 9, 93);

    let description = document.getElementById("serviceDescriptionInput").value.replace(/[\n]/g, " ").replace(/[\n]/g, " ").replace(/[\r]/g, " ");

    pdf.text(description.substring(0, 79), 7, 98);
    pdf.text(description.substring(80, 159), 7, 103);
    pdf.text(description.substring(160, 239), 7, 107);
    pdf.text(description.substring(240, 319), 7, 112);
    pdf.text(description.substring(320, 399), 7, 117);
    pdf.text(description.substring(400, 479), 7, 121);
    pdf.text(description.substring(480, 559), 7, 125);
    pdf.text(description.substring(560, 639), 7, 130);
    pdf.text(description.substring(640, 719), 7, 135);
    pdf.text(description.substring(720, 799), 7, 139);
    pdf.text(description.substring(800, 879), 7, 144);
    pdf.text(description.substring(880, 959), 7, 148);
    pdf.text(description.substring(960, 1039), 7, 153);

    // Total Cost
    pdf.setFontSize(8);
    let totalCost = parseFloat(document.getElementById("serviceCostsTotalInput").value) || 0;
    pdf.text(totalCost.toFixed(2).toString(), 196, 102);

    pdf.setFontSize(10);
    pdf.text(document.getElementById("discountDescriptionInput").value, 7, 169.5);
    //pdf.text("Discount Line 2 -", 7, 174); - Unused
    //pdf.text("Discount Line 3 -", 7, 178.5); - Unused

    let discountAmount = parseFloat(document.getElementById("discountAmountInput").value) || 0;
    if(discountAmount > 0)
    {
        pdf.text(discountAmount.toFixed(2).toString(), 145, 169.5);
    }
    //pdf.text("2000.00", 145, 174); - Unused
    //pdf.text("3000.00", 145, 178.5); - Unused

    if(discountAmount > 0)
    {
        pdf.text(discountAmount.toFixed(2).toString(), 188, 174);
    }
    pdf.text((totalCost - discountAmount).toFixed(2).toString(), 188, 204);

    if(document.getElementById("guaranteeExtendedInput").checked)
    {
        pdf.text("X", 4, 263);
    }
    pdf.text(document.getElementById("guaranteeConditionsInput").value, 50, 263);
    pdf.text(document.getElementById("guaranteeReasonInput").value, 4, 269);

    let filename = ticketDate.value.replaceAll('-', '') + '-' + ticketNumber.value + '-' + submittedName.value.replaceAll(' ', '_') + '-Invoice';
    pdf.save(filename);
}

function generateProposal()
{
    const { jsPDF } = window.jspdf;
    let pdf = new jsPDF('p', 'mm', 'letter');

    let ticketDate = document.getElementById("invoiceDateInput");
    let ticketNumber = document.getElementById("invoiceNumberInput");
    let submittedName = document.getElementById("submitNameInput");

    if((ticketDate.value.length == 0) || (ticketNumber.value.length == 0) || (submittedName.value.length == 0))
    {
        alert("Please populate Invoice Date, Invoice Number and Customer Name - To Generate Invoice");
        return;
    }

    pdf.setFont("courier", "normal", "normal");

    pdf.setFontSize(8);
    let invoiceDate = new Date(document.getElementById("invoiceDateInput").value);
    let invoiceDateString = (invoiceDate.getMonth() + 1) + "/" + invoiceDate.getDate() + "/" + invoiceDate.getFullYear();

    pdf.text(invoiceDateString, 178, 2);

    pdf.setFontSize(18);
    pdf.text(document.getElementById("invoiceNumberInput").value, 191, 11);

    pdf.setFontSize(10);
    pdf.text(document.getElementById("submitNameInput").value, 30, 40);
    pdf.text(document.getElementById("submitStreetInput").value, 30, 45.25);
    pdf.text(document.getElementById("submitCityInput").value, 30, 49.5);
    pdf.text(document.getElementById("submitStateInput").value, 30, 53.75);
    pdf.text(document.getElementById("submitZipInput").value, 89, 53.75);
    pdf.text(document.getElementById("submitTelephoneNumberInput").value, 48, 58);

    pdf.text(document.getElementById("workAtNameInput").value, 120, 40);
    pdf.text(document.getElementById("workAtStreetInput").value, 120, 45.25);
    pdf.text(document.getElementById("workAtCityInput").value, 120, 49.5);
    pdf.text(document.getElementById("workAtStateInput").value, 120, 53.75);
    pdf.text(document.getElementById("workAtZipInput").value, 179, 53.75);
    pdf.text(document.getElementById("workAtTelephoneNumberInput").value, 138, 58);

    let description = document.getElementById("serviceDescriptionInput").value.replace(/[\n]/g, " ").replace(/[\n]/g, " ").replace(/[\r]/g, " ");

    pdf.text(description.substring(0, 79), 20, 72);
    pdf.text(description.substring(80, 159), 20, 76.25);
    pdf.text(description.substring(160, 239), 20, 80.5);
    pdf.text(description.substring(240, 319), 20, 85.75);
    pdf.text(description.substring(320, 399), 20, 89.5);
    pdf.text(description.substring(400, 479), 20, 94.75);
    pdf.text(description.substring(480, 559), 20, 98.5);
    pdf.text(description.substring(560, 639), 20, 102.75);
    pdf.text(description.substring(640, 719), 20, 108);
    pdf.text(description.substring(720, 799), 20, 112.25);
    pdf.text(description.substring(800, 879), 20, 117);
    pdf.text(description.substring(880, 959), 20, 121);
    pdf.text(description.substring(960, 1039), 20, 125.5);

    let totalCost = parseFloat(document.getElementById("serviceCostsTotalInput").value) || 0;
    let discountAmount = parseFloat(document.getElementById("discountAmountInput").value) || 0;
    let finalCost = totalCost - discountAmount;

    pdf.text((finalCost).toFixed(2).toString(), 166, 135);

    pdf.text(document.getElementById("serviceCostsPercentExecutionInput").value, 45, 145);
    pdf.text(document.getElementById("serviceCostsPercentStartInput").value, 45, 151);

    let executePercent = parseFloat(document.getElementById("serviceCostsPercentExecutionInput").value) || 0;
    let startPercent = parseFloat(document.getElementById("serviceCostsPercentStartInput").value) || 0;

    let executeAmount = finalCost * (executePercent / 100.0);
    let startAmount = finalCost * (startPercent / 100.0);
    pdf.text(executeAmount.toFixed(2).toString(), 79, 145);
    pdf.text(startAmount.toFixed(2).toString(), 79, 151);

    let startDate = new Date(document.getElementById("serviceDatesStartInput").value);
    let completeDate = new Date(document.getElementById("serviceDatesCompleteInput").value);

    let startDateString = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();
    let completeDateString = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();
    pdf.text(startDateString, 75, 162);
    pdf.text(completeDateString, 172, 162);

    pdf.text(document.getElementById("serviceDatesEstimateValidInput").value, 124, 232);

    let filename = ticketDate.value.replaceAll('-', '') + '-' + ticketNumber.value + '-' + submittedName.value.replaceAll(' ', '_') + '-Proposal';
    pdf.save(filename);
}