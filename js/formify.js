function displayFileName()
{
    var fileName = '';
    fileName = document.getElementById("loadFileInput").files[0].name;

    document.getElementById("fileNameSpan").innerHTML = fileName;
}

function generateInvoice() {
    const { jsPDF } = window.jspdf;

    var pdf = new jsPDF('p', 'mm', 'letter');

    pdf.setFont("courier", "normal", "normal");

    pdf.setFontSize(12);
    let serviceDate = document.getElementById("invoiceDateInput").value;
    let field = serviceDate.split("-");
    let year = field[0] % 1000;
    let month = field[1];
    let day = field[2];
    pdf.text(month, 152, 3);
    pdf.text(day, 161, 3);
    pdf.text(year, 169, 3);

    pdf.setFontSize(10);
    // Technician Name
    pdf.text(document.getElementById("invoiceTechNameInput").value, 151, 10);

    // Customer Name
    pdf.text(document.getElementById("").value, 7, 43);

    // Customer Number
    pdf.text(document.getElementById("").value, 118, 43);

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
    let startDate = document.getElementById("serviceDatesStartInput").value;
    let completeDate = document.getElementById("serviceDatesCompleteInput").value;
    let startDateString = startDate.getMonth() + "/" + startDate.getDate() + "/" + startDate.getFullYear();
    let completeDateString = startDate.getMonth() + "/" + startDate.getDate() + "/" + startDate.getFullYear();
    pdf.text(startDateString, 121, 88);
    pdf.text(completeDateString, 9, 93);

    let description = document.getElementById("serviceDescriptionInput").value;

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
    pdf.text(document.getElementById(""), 196, 102);

    pdf.setFontSize(10);
    pdf.text("Discount Line 1 -", 7, 169.5);
    pdf.text("Discount Line 2 -", 7, 174);
    pdf.text("Discount Line 3 -", 7, 178.5);

    pdf.text("1000.00", 145, 169.5);
    pdf.text("2000.00", 145, 174);
    pdf.text("3000.00", 145, 178.5);

    pdf.text("6000.00", 188, 174);
    pdf.text("14,000.00", 188, 204);

    pdf.text("X", 4, 263);
    pdf.text("This is a good reason", 4, 269);

    var blobPDF =  new Blob([ pdf.output('blob') ], { type : 'application/pdf'});
    var blobUrl = URL.createObjectURL(blobPDF);  //<--- THE ERROR APPEARS HERE

    window.open(blobUrl);  // will open a new tab

    /*
    pdfAttachment : Files; //declare the file
    newName = 'new_file_name'
    this.pdfAttachment = new File([doc.output('blob')], newName, {
        type: doc.output('blob').type,
        lastModified: doc.output('blob').lastModified,
    });
    */

    //pdf.save('TestInvoice.pdf');
}