//function apelOpenPdf(e, classe) {
//    var file = [
//        '/sites/default/files/pdfpreview/pass.pdf',
//        '/sites/default/files/pdfpreview/ps.pdf',
//        '/sites/default/files/pdfpreview/ms.pdf',
//        '/sites/default/files/pdfpreview/gs.pdf',
//        '/sites/default/files/pdfpreview/cp.pdf',
//        '/sites/default/files/pdfpreview/ce1.pdf',
//        '/sites/default/files/pdfpreview/ce2.pdf',
//        '/sites/default/files/pdfpreview/cm1.pdf',
//        '/sites/default/files/pdfpreview/cm2.pdf',
//        '/sites/default/files/pdfpreview/clis.pdf',
//        '/sites/default/files/pdfpreview/6e.pdf',
//        '/sites/default/files/pdfpreview/6e-segpa.pdf',
//        '/sites/default/files/pdfpreview/6e-hr.pdf',
//        '/sites/default/files/pdfpreview/5e.pdf',
//        '/sites/default/files/pdfpreview/5e-segpa.pdf',
//        '/sites/default/files/pdfpreview/4e.pdf',
//        '/sites/default/files/pdfpreview/4e-segpa.pdf',
//        '/sites/default/files/pdfpreview/3e.pdf',
//        '/sites/default/files/pdfpreview/3e-segpa.pdf'
//    ],

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
    name = 'APEL STPAUL Liste Fournitures',
    pdfWind;
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
}



// Variable to hold request

var request;

$(document).ready(function(){
    
    
    $('#apelEcolePapOrder').submit(function(event) {
        
        postToGoogleEcole();
        // Prevent default posting of form
        event.preventDefault();
    });
    $('#apelColPapOrder').submit(function(event) {
        
        postToGoogleCollege();
        // Prevent default posting of form
        event.preventDefault();
    });
});


function postToGoogleEcole() {
  function formValidationEcole() {
    var result = false;
    var name = $('#apelEcoleNomEleve').val();
    var prenom = $('#apelEcolePrenomEleve').val();
    var niveau = $('#apelEcoleNiveauEleve').val();
    //var classe = $('#apelEcoleClasseEleve').val();
    var address = $('#apelEcoleAdresseParent').val();
    var tel = $('#apelEcoleTelParent').val();
    var email = $('#apelEcoleMailParent').val();
    var orderAmount =  $('#apelEcoleOrderAmount').val();
    
    if ((name === "") || 
        (prenom === "") || 
        (address === "")) {
        
        alert("Remplissez le nom et le prenom de l'eleve et votre adresse. Merci!");
        result = false;
    }
      
      
    //src: https://wiki.base22.com/pages/viewpage.action?pageId=72942000
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var res = false;
        res = re.test(email);
        return (res);
    }
    
    var no = /[0-9]/g;  
    var resTel = no.test(tel);
    if (!resTel) {
        alert("Saisissez seulement les chiffres pour votre numero de telephone!");
        result = false; 
    }
     
    if (!validateEmail(email)) {
        alert("Vérifiez la saisie de votre adresse email!");
        result = false;
    }
    
    
    var resOrder;
    $("#apelEcolePapOrder:checkbox").filter(":enabled").each(function() {
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
    
    if ($("#apelLot7").prop("checked") && 
        ($("#apelEcoleRefCouleur").val() === "" || 
       $("#apelEcoleRefEcri").val() === "" ||
       $("#apelEcoleRefDessin").val() === "")) {
        alert ("Remplissez toutes les cases des références d'étiquettes!");
        result = false;       
    }      
    return result; 
}
    
 if (formValidationEcole() === true) {
     
//    $("#apelEcolePapOrder input").each(function() {
//            console.log(this.name);
//            console.log(this.value);
//    });
     
    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    //var $form = $(this);
     var $form = $("#apelEcolePapOrder");

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to google spreadsheet
    request = $.ajax({
        type: "post",
        url:"https://script.google.com/macros/s/AKfycby6pY00cMsmW4zRcZfPK_VpsskE7cS9EwTw69hPMLngFJLYLb8n/exec",
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
        $("#apelEcolePrenomEleve").text("");
        $("#apelEcolePrenomEleve").val("");
        $(":checkbox").each(function() {
            if (this.checked === true) {
                this.checked = false;
            }
        });
        $("#apelEcoleOrderAmount").val(0);
        $("#apelEcoleOrderAmount").text("");
        $("#apelEcoleSommePost").val(0);
        
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
        alert("Votre commande n'a pas été envoyée. Essayez l'envoyer de nouveau. Merci pour votre compréhension!");
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });
 }   
}

function postToGoogleCollege() {
  function formValidationCollege() {
    var result = false;
    var name = $('#apelColNomEleve').val();
    var prenom = $('#apelColPrenomEleve').val();
    //var niveau = $('#apelColNiveauEleve').val();
    //var classe = $('#apelColClasseEleve').val();
    var address = $('#apelColAdresseParent').val();
    var tel = $('#apelColTelParent').val();
    var email = $('#apelColMailParent').val();
    var orderAmount =  $('#apelColOrderAmount').val();
    
    if ((name === "") || 
        (prenom === "") || 
        (address === "")) {
        
        alert("Remplissez le nom et le prenom de l'eleve et votre adresse. Merci!");
        result = false;
    }
      
      
    //src: https://wiki.base22.com/pages/viewpage.action?pageId=72942000
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var res = false;
        res = re.test(email);
        return (res);
    }
    
    var no = /[0-9]/g;  
    var resTel = no.test(tel);
    if (!resTel) {
        alert("Saisissez seulement les chiffres pour votre numero de telephone!");
        result = false; 
    }
     
    if (!validateEmail(email)) {
        alert("Vérifiez la saisie de votre adresse email!");
        result = false;
    }
    
    
    var resOrder;
    $("#apelColPapOrder:checkbox").filter(":enabled").each(function() {
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
}

    
    
 if (formValidationCollege() === true) {
//    $("#apelColPapOrder input").each(function() {
//            console.log(this.name);
//            console.log(this.value);
//    });
     
    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
   // var $form = $(this);
     var $form = $("#apelColPapOrder");
    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

     // Let's select and cache all the fields CHANGED
//    var $inputs = $form.find("input, select, textarea");

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
        $("#apelColPrenomEleve").text("");
        $("#apelColPrenomEleve").val("");
        $("#apelColClasseEleve option[value='--Classe--']").attr("selected","selected");
        $("#apelColPapOrder:checkbox").each(function() {
            if (this.checked === true) {
                this.checked = false;
            }
        });
        $("#apelColOrderAmount").val(0);
        $("#apelColOrderAmount").text("");
        $("#apelColSommePost").val(0);
        
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
        alert("Votre commande n'a pas été envoyée. Essayez l'envoyer de nouveau. Merci pour votre compréhension!");
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });
 }
    
}  
  