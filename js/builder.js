
/*function printOrder () {
  var printContent = document.getElementById('main');
  var windowUrl = "Liste des Fournitures";
  var windowName = "Print";
  var printWindow = window.open(windowUrl, windowName);
  printWindow.document.write(printContent.innerHTML);      
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();
  return false;
}*/

function apelOpenPdf(e, classe) {
    var file = [
        'images/pass.pdf',
        'images/ps.pdf',
        'images/ms.pdf',
        'images/gs.pdf',
        'images/cp.pdf',
        'images/ce1.pdf',
        'images/ce2.pdf',
        'images/cm1.pdf',
        'images/cm2.pdf',
        'images/clis.pdf',
        'images/6e.pdf',
        'images/6e-segpa.pdf',
        'images/6e-hr.pdf',
        'images/5e.pdf',
        'images/5e-segpa.pdf',
        'images/4e.pdf',
        'images/4e-segpa.pdf',
        'images/3e.pdf',
        'images/3e-segpa.pdf'
    ],
    //redirect = 'newPage.html';
    name = 'APEL STPAUL Liste Fournitures';
    // stop the browser from going to the href
    e = e || window.event; // for IE
    e.preventDefault(); 
    switch (classe) {
        case 'pass':
            // launch a new window with your PDF
            pdfWind = window.open(file[0],name);
            break;
        case 'ps':
            // launch a new window with your PDF
            pdfWind = window.open(file[1],name);
            break;
        case 'ms':
            // launch a new window with your PDF
            pdfWind = window.open(file[2],name);
            break;
        case 'gs':
            // launch a new window with your PDF
            pdfWind = window.open(file[3],name);
            break;
        case 'cp':
            // launch a new window with your PDF
            pdfWind = window.open(file[4],name);
            break;
        case 'ce1':
            // launch a new window with your PDF
            pdfWind = window.open(file[5],name);
            break;
        case 'ce2':
            // launch a new window with your PDF
            pdfWind = window.open(file[6],name);
            break;
        case 'cm1':
            // launch a new window with your PDF
            pdfWind = window.open(file[7],name);
            break;
        case 'cm2':
            // launch a new window with your PDF
            pdfWind = window.open(file[8],name);
            break;
        case 'clis':
            // launch a new window with your PDF
            pdfWind = window.open(file[9],name);
            break;
        case '6e':
            // launch a new window with your PDF
            pdfWind = window.open(file[10],name);
            break;
        case '6e-segpa':
            // launch a new window with your PDF
            pdfWind = window.open(file[11],name);
            break;
        case '6e-hr':
            // launch a new window with your PDF
            pdfWind = window.open(file[12],name);
            break;   
        case '5e':
            // launch a new window with your PDF
            pdfWind = window.open(file[13],name);
            break;
        case '5e-segpa':
        // launch a new window with your PDF
        pdfWind = window.open(file[14],name);
        break;
        case '4e':
            // launch a new window with your PDF
            pdfWind = window.open(file[15],name);
            break;
        case '4e-segpa':
            // launch a new window with your PDF
            pdfWind = window.open(file[16],name);
            break;
        case '3e':
            // launch a new window with your PDF
            pdfWind = window.open(file[17],name);
            break;
        case '3e-segpa':
            // launch a new window with your PDF
            pdfWind = window.open(file[18],name);
            break;            
    }        
    //pdfWind.focus();
    //pdfWind.parent.location.href = 'index.html';
    // redirect current page to new location
    //window.location = redirect;
};



// Variable to hold request

var request;

$(document).ready(function(){
    
    
    $('#apelPapOrder').submit(function(event) {
        
        postToGoogle();
        // Prevent default posting of form
        event.preventDefault();
    });
});


function postToGoogle() {
  function formValidation() {
    var result = false;
    var name = $('#apelNomEleve').val();
    var prenom = $('#apelPrenomEleve').val();
    var niveau = $('#apelNiveauEleve').val();
    var classe = $('#apelClasseEleve').val();
    //optional
    //var nameParent = $('#apelNomParent').val();
    var address = $('#apelAdresseParent').val();
    var tel = $('#apelTelParent').val();
    var email = $('#apelMailParent').val();
    var orderAmount =  $('#apelOrderAmount').val();
    
    if ((name == "") || 
        (prenom == "") || 
        (address == "")) {
        
        alert("Remplissez le nom et le prenom de l'eleve et votre adresse. Merci!");
        result = false;
    };
      
      
    //src: https://wiki.base22.com/pages/viewpage.action?pageId=72942000
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var res = false;
        res = re.test(email);
        return (res);
    };
    
    var no = /[0-9]/g;  
        resTel = no.test(tel);
    if (!resTel) {
        alert("Saisissez seulement les chiffres pour votre numero de telephone!");
        result = false; 
    }
     
    if (!validateEmail(email)) {
        alert("Vérifiez la saisie de votre adresse email!");
        result = false;
    }
    
    
    var resOrder;
    $("#apelPapOrder:checkbox").filter(":enabled").each(function() {
        if (this.checked){
            resOrder++;
        }
    return resOrder;    
    });
    
    if (resOrder === 0 ||
       orderAmount < 1) {
        alert ("Choisissez au moins un lot et appuyez sur Calculer!");
        result = false;            
    }
    else result = true;
    
      
    
    return result; 
};

    
    
 if (formValidation() === true) {
     
     
    $(":checkbox").each(function() {
        if (this.checked){
            this.value = 1;
        }
        else
            this.value = 0;
    });
    $(":input").each(function() {
            console.log(this.name);
            console.log(this.value);
    });
     
    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

     // Let's select and cache all the fields CHANGED
    var $inputs = $form.find("input, select, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to google spreadsheet
    request = $.ajax({
        type: "post",
        url:"https://script.google.com/macros/s/AKfycbxpL6D9M_uRJGr5VfU2P_WAj5gElNwIAvQaJN89ieF8MS4v-Dws/exec",
        data: serializedData,
        //crossDomain: true,
        //CHANGED ADDED
        //contentType: 'text/plain' ,
        //contentType: "multipart\/form-data; boundary=",
        //xhrFields: {
        // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
        // This can be used to set the 'withCredentials' property.
        // Set the value to 'true' if you'd like to pass cookies to the server.
        // If this is enabled, your server must respond with the header
        // 'Access-Control-Allow-Credentials: true'.
       // withCredentials: false,
        //},
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
        alert("Nous vous remercions pour votre commande! N'oubliez pas de nous envoyer votre chèque; car seules les commandes réglées peuvent être livrées!");
        $("#apelPrenomEleve").text("");
        $("#apelPrenomEleve").val("");
        $(":checkbox").each(function() {
            if (this.checked === true) {
                this.checked = false;
            }
        });
        $("#apelOrderAmount").val(0);
        $("#apelOrderAmount").text("");
        $("#apelSommePost").val(0);
        
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
        alert("Votre commande n'a pas été envoyée. Essayez l'envoyer de nouveau. Merci pour votre compréhension!")
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });
 }
    
};


    
  

//  // Bind to the submit event of our form
//
//  $("#apelPapOrder").submit(function(event){
//
//    // Abort any pending request
//    if (request) {
//        request.abort();
//    }
//    // setup some local variables
//    var $form = $(this);
//
//    // Let's select and cache all the fields
//    var $inputs = $form.find("input, select, button, textarea");
//
//    // Serialize the data in the form
//    var serializedData = $form.serialize();
//
//    // Let's disable the inputs for the duration of the Ajax request.
//    // Note: we disable elements AFTER the form data has been serialized.
//    // Disabled form elements will not be serialized.
//    $inputs.prop("disabled", true);
//
//    // Fire off the request to google spreadsheet
//    request = $.ajax({
////        url: "https://script.google.com/macros/s/AKfycbySoYYgOtwfegja7_CFQkB6tCg27xA51JwHJZ_gPV30E4XUhs8_/exec",
//        url:"https://script.google.com/macros/s/AKfycbySoYYgOtwfegja7_CFQkB6tCg27xA51JwHJZ_gPV30E4XUhs8_/exec",
//        type: "post",
//        data: serializedData
//    });
//
//    // Callback handler that will be called on success
//    request.done(function (response, textStatus, jqXHR){
//        // Log a message to the console
//        console.log("Hooray, it worked!");
//    });
//
//    // Callback handler that will be called on failure
//    request.fail(function (jqXHR, textStatus, errorThrown){
//        // Log the error to the console
//        console.error(
//            "The following error occurred: "+
//            textStatus, errorThrown
//        );
//    });
//
//    // Callback handler that will be called regardless
//    // if the request failed or succeeded
//    request.always(function () {
//        // Reenable the inputs
//        $inputs.prop("disabled", false);
//    });
//
//    // Prevent default posting of form
//    event.preventDefault();
// });
//});
//
