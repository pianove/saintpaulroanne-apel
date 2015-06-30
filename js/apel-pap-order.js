var Classe = function() {
    //le nome de la classe
    this.name; 
    //maternelle, ecole, college
    this.level;   
};

var Lot = function() {
    this.lotName;
    this.lotPrice;
};

var Article = function() {
    this.articleClass;
    this.articleLotName;
    this.articleLotPrice;
};


var classMatNames = [
    "Petite Section",
    "Moyenne Section",
    "Grande Section"
];

var classEcNames = [
    "CLIS",
    "CP",
    "CE1",
    "CE2",
    "CM1",
    "CM2"
];

var classColNames = [
    "Sixième",
    "Sixième Horaires Renforcés",
    "Sixième SEGPA",
    "Cinquième",
    "Cinquième SEGPA",
    "Quatrième",
    "Quatrième SEGPA",
    "Troisième",
    "Troisième SEGPA"
];

var EcoleLotNames = [
    "1 lot Fournitures scolaires",
    "1 Dictionnaire",
    "Livres étudiés en classe",
    "1 Calculatrice CASIO Collège",
    "Étiquettes personnalisées «pack découverte»",
    "1 Lot Librairie CE1"
];

var ColLotNames = [
    "1 lot PAPETERIE",
    "1 lot MATERIEL"
];

 var levelNames = [
        'Maternelle',
        'Elementaire',
        'Collège'];

var HTMLoptionName = '<option value="%val%">%data%</option>';
Classe.prototype.display = function(myLevel) {
    if (myLevel === this.level) {
        var el = HTMLoptionName.replace("%data%", this.name);
        el = el.replace("%val%", this.name);
        $("#apelEcoleClasseEleve").append(el);
    }
};


function instClasse(list, level) {
    var i = 0;
    var allClasses = [];
    for (i = 0; i < list.length; i++) {
        var classe = new Classe();
        classe.name = list[i];
        classe.level = level;
        allClasses.push(classe); 
    }
    return allClasses;
}

var matClasses, 
    ecClasses,
    colClasses;

var allMatClasses = instClasse(classMatNames,levelNames[0]);

var allEcClasses = instClasse(classEcNames, levelNames[1]);
var allMatEcClasses = allMatClasses.concat(allEcClasses);
var allColClasses = instClasse(classColNames, levelNames[2]);
var all = allMatClasses.concat(allColClasses).concat(allEcClasses);

allColClasses.forEach(function (classe) {
    var el = HTMLoptionName.replace("%data%", classe.name);
    el = el.replace("%val%", classe.name);
    $("#apelColClasseEleve").append(el);
});

//var list = lotNames;
//var i = 0;
//not used
//var allLots = [];
//for (i = 0; i < list.length; i++) {
//        lot = new Lot();
//        lot.lotName = list[i];
//        allLots.push(lot);
//};


//var articlePricesLotDefault = 0.99;
var articlePricesLotLibrc1 = 35;
var articlePricesLotLivresc2 = 10;

var articlePriceEtiquette = 15;
var allArticles = [];
//for (i = 0; i < all.length; i++) {
//    article = new Article();
//    article.articleClass = all[i].name;
//    article.articleLotName = lotNames[0];
//    article.articleLotPrice = articlePricesLotDefault; 
//    allArticles.push(article);
//};
var article;
// create article for PS - lot
    article = new Article();
    article.articleClass = classMatNames[0];
    article.articleLotName = EcoleLotNames[0];
    article.articleLotPrice = 25; 
    allArticles.push(article);
// create article for PS - etiquette        
    article = new Article();
    article.articleClass = classMatNames[0];
    article.articleLotName = EcoleLotNames[4];
    article.articleLotPrice = articlePriceEtiquette;
    allArticles.push(article);
// create article for MS - lot
    article = new Article();
    article.articleClass = classMatNames[1];
    article.articleLotName = EcoleLotNames[0];
    article.articleLotPrice = 30; 
    allArticles.push(article);
// create article for MS - etiquette        
    article = new Article();
    article.articleClass = classMatNames[1];
    article.articleLotName = EcoleLotNames[4];
    article.articleLotPrice = articlePriceEtiquette;
    allArticles.push(article);
// create article for GS - lot
    article = new Article();
    article.articleClass = classMatNames[2];
    article.articleLotName = EcoleLotNames[0];
    article.articleLotPrice = 25; 
    allArticles.push(article);
// create article for GS - etiquette        
    article = new Article();
    article.articleClass = classMatNames[2];
    article.articleLotName = EcoleLotNames[4];
    article.articleLotPrice = articlePriceEtiquette;
    allArticles.push(article);
// create article for CLIS - lot
    article = new Article();
    article.articleClass = classEcNames[0];
    article.articleLotName = EcoleLotNames[0];
    article.articleLotPrice = 8; 
    allArticles.push(article);
// create article for CLIS - etiquette
    article = new Article();
    article.articleClass = classEcNames[0];
    article.articleLotName = EcoleLotNames[4];
    article.articleLotPrice = articlePriceEtiquette;
    allArticles.push(article);
// create article for CP - lot
    article = new Article();
    article.articleClass = classEcNames[1];
    article.articleLotName = EcoleLotNames[0];
    article.articleLotPrice = 20; 
    allArticles.push(article);
// create article for CP - etiquette
    article = new Article();
    article.articleClass = classEcNames[1];
    article.articleLotName = EcoleLotNames[4];
    article.articleLotPrice = articlePriceEtiquette;
    allArticles.push(article);
// create article for CE1 - lot
    article = new Article();
    article.articleClass = classEcNames[2];
    article.articleLotName = EcoleLotNames[0];
    article.articleLotPrice = 25; 
    allArticles.push(article);
// create article for CE1 - livresdico
    article = new Article();
    article.articleClass = classEcNames[2];
    article.articleLotName = EcoleLotNames[5];
    article.articleLotPrice = articlePricesLotLibrc1; 
    allArticles.push(article);

// create article for CE1 - etiquette
    article = new Article();
    article.articleClass = classEcNames[2];
    article.articleLotName = EcoleLotNames[4];
    article.articleLotPrice = articlePriceEtiquette;
    allArticles.push(article);

// create article for CE2 - lot        
    article = new Article();
    article.articleClass = classEcNames[3];
    article.articleLotName = EcoleLotNames[0];
    article.articleLotPrice = 43;
    allArticles.push(article);
// create article for CE2 - livres
    article = new Article();
    article.articleClass = classEcNames[3];
    article.articleLotName = EcoleLotNames[2];
    article.articleLotPrice = articlePricesLotLivresc2;
    allArticles.push(article);
// create article for CE2 - dico
    article = new Article();
    article.articleClass = classEcNames[3];
    article.articleLotName = EcoleLotNames[1];
    article.articleLotPrice = 16;
    allArticles.push(article);

// create article for CE2 - etiquette
    article = new Article();
    article.articleClass = classEcNames[3];
    article.articleLotName = EcoleLotNames[4];
    article.articleLotPrice = articlePriceEtiquette;
    allArticles.push(article);

// create article for CM1 - lot
    article = new Article();
    article.articleClass = classEcNames[4];
    article.articleLotName = EcoleLotNames[0];
    article.articleLotPrice = 43;
    allArticles.push(article);


// create article for CM1 - dico
    article = new Article();
    article.articleClass = classEcNames[4];
    article.articleLotName = EcoleLotNames[1];
    article.articleLotPrice = 9;
    allArticles.push(article);

// create article for CM1 - etiquette
    article = new Article();
    article.articleClass = classEcNames[4];
    article.articleLotName = EcoleLotNames[4];
    article.articleLotPrice = articlePriceEtiquette;
    allArticles.push(article);

// create article for CM2 - lot
    article = new Article();
    article.articleClass = classEcNames[5];
    article.articleLotName = EcoleLotNames[0];
    article.articleLotPrice = 35;
    allArticles.push(article);

// create article for CM2 - dico
    article = new Article();
    article.articleClass = "CM2";
    article.articleLotName = EcoleLotNames[1];
    article.articleLotPrice = 9;
    allArticles.push(article);

// create article for CM2 - calc
    article = new Article();
    article.articleClass = "CM2";
    article.articleLotName = EcoleLotNames[3];
    article.articleLotPrice = 24;
    allArticles.push(article);

// create article for CM2 - etiquette
    article = new Article();
    article.articleClass = "CM2";
    article.articleLotName = EcoleLotNames[4];
    article.articleLotPrice = articlePriceEtiquette;
    allArticles.push(article);

// create article for 6e - PAP
    article = new Article();
    article.articleClass = classColNames[0];
    article.articleLotName = ColLotNames[0];
    article.articleLotPrice = 40;
    allArticles.push(article);
// create article for 6e - MAT
    article = new Article();
    article.articleClass = classColNames[0];
    article.articleLotName = ColLotNames[1];
    article.articleLotPrice = 25;
    allArticles.push(article);
// create article for 6e HR - PAP
    article = new Article();
    article.articleClass = classColNames[1];
    article.articleLotName = ColLotNames[0];
    article.articleLotPrice = 38;
    allArticles.push(article);
// create article for 6e HR - MAT
    article = new Article();
    article.articleClass = classColNames[1];
    article.articleLotName = ColLotNames[1];
    article.articleLotPrice = 25;
    allArticles.push(article);
// create article for 6e SEGPA - PAP
    article = new Article();
    article.articleClass = classColNames[2];
    article.articleLotName = ColLotNames[0];
    article.articleLotPrice = 18;
    allArticles.push(article);
// create article for 6e SEGPA - MAT
    article = new Article();
    article.articleClass = classColNames[2];
    article.articleLotName = ColLotNames[1];
    article.articleLotPrice = 25;
    allArticles.push(article);
// create article for 5e - PAP
    article = new Article();
    article.articleClass = classColNames[3];
    article.articleLotName = ColLotNames[0];
    article.articleLotPrice = 35;
    allArticles.push(article);
// create article for 5e - MAT
    article = new Article();
    article.articleClass = classColNames[3];
    article.articleLotName = ColLotNames[1];
    article.articleLotPrice = 25;
    allArticles.push(article);
// create article for 5e SEGPA - PAP
    article = new Article();
    article.articleClass = classColNames[4];
    article.articleLotName = ColLotNames[0];
    article.articleLotPrice = 20;
    allArticles.push(article);
// create article for 5e SEGPA - MAT
    article = new Article();
    article.articleClass = classColNames[4];
    article.articleLotName = ColLotNames[1];
    article.articleLotPrice = 26;
    allArticles.push(article);
// create article for 4e - PAP
    article = new Article();
    article.articleClass = classColNames[5];
    article.articleLotName = ColLotNames[0];
    article.articleLotPrice = 30;
    allArticles.push(article);
// create article for 4e - MAT
    article = new Article();
    article.articleClass = classColNames[5];
    article.articleLotName = ColLotNames[1];
    article.articleLotPrice = 22;
    allArticles.push(article);
// create article for 4e SEGPA - PAP
    article = new Article();
    article.articleClass = classColNames[6];
    article.articleLotName = ColLotNames[0];
    article.articleLotPrice = 25;
    allArticles.push(article);
// create article for 4e SEGPA - MAT
    article = new Article();
    article.articleClass = classColNames[6];
    article.articleLotName = ColLotNames[1];
    article.articleLotPrice = 18;
    allArticles.push(article);
// create article for 3e - PAP
    article = new Article();
    article.articleClass = classColNames[7];
    article.articleLotName = ColLotNames[0];
    article.articleLotPrice = 33;
    allArticles.push(article);
// create article for 3e - MAT
    article = new Article();
    article.articleClass = classColNames[7];
    article.articleLotName = ColLotNames[1];
    article.articleLotPrice = 22;
    allArticles.push(article);
// create article for 3e SEGPA - PAP
    article = new Article();
    article.articleClass = classColNames[8];
    article.articleLotName = ColLotNames[0];
    article.articleLotPrice = 25;
    allArticles.push(article);
// create article for 3e SEGPA - MAT
    article = new Article();
    article.articleClass = classColNames[8];
    article.articleLotName = ColLotNames[1];
    article.articleLotPrice = 21;
    allArticles.push(article);


// to store only euro sign
var initText = $("#apelEcoleOrderAmount").text();
function calcEcoleOrder() {
    var selClass = $("#apelEcoleClasseEleve").val();
   
    var selLot = [];
    //http://www.sanwebe.com/2014/01/how-to-select-all-deselect-checkboxes-jquery
    $(":checkbox").each(function() {
        
        if (this.checked === true) {
        selLot.push(this.name);
        }
    });    
    
    
    console.log(selLot);
    var amount = 0;
    var i;
    for (i = 0; i < selLot.length; i++) {
        allArticles.forEach(function (article){
            if (article.articleClass === selClass && 
               article.articleLotName === selLot[i]) {
                amount +=article.articleLotPrice;
            }
        });
    }
    var formattedAmount = amount + ",00 ";
    $("#apelEcoleOrderAmount").val(amount);
    //$("#apelEcoleOrderAmount").text(formattedAmount + initText);
    $("#apelEcoleOrderAmount").text(formattedAmount);
    $("#apelEcoleSommePost").val(amount);
}


// to store only euro sign
var initText = $("#apelColOrderAmount").text();
function calcColOrder() {
    var selClass = $("#apelColClasseEleve").val();
   
    var selLot = [];
    //http://www.sanwebe.com/2014/01/how-to-select-all-deselect-checkboxes-jquery
    $(":checkbox").each(function() {
        
        if (this.checked === true) {
        selLot.push(this.name);
        }
    });    
    
    
    console.log(selLot);
    var amount = 0;
    var i;
    for (i = 0; i < selLot.length; i++) {
        allArticles.forEach(function (article){
            if (article.articleClass === selClass && 
               article.articleLotName === selLot[i]) {
                amount +=article.articleLotPrice;
            }
        });
    }
    var formattedAmount = amount + ",00 ";
    $("#apelColOrderAmount").val(amount);
    //$("#apelEcoleOrderAmount").text(formattedAmount + initText);
    $("#apelColOrderAmount").text(formattedAmount);
    $("#apelColSommePost").val(amount);
}

var list = levelNames;
var i;
//excl College
for (i = 0; i < list.length-1; i++) {
    var el = HTMLoptionName.replace("%data%", list[i]);
    el = el.replace("%val%", list[i]);
    $("#apelEcoleNiveauEleve").append(el);
}

var list=[];
list = classMatNames.concat(classEcNames).concat(classColNames);

//append Ecole lot a commander
var HTMLlot1Names = '<label for="apelLot1" style="margin-left: 5%;display:inline;">%name%</label><input id="apelLot1" type="checkbox" name="%name%" style="margin-left: 10px;" value ="%name%" disabled="false"/><br>';
var lotDefault = HTMLlot1Names.replace("%name%",EcoleLotNames[0]);
lotDefault = lotDefault.replace("%name%",EcoleLotNames[0]);
lotDefault = lotDefault.replace("%name%",EcoleLotNames[0]);
$("#apelEcoleLots").append(lotDefault);

// append Ecole optional lots - dico
var HTMLlot2Names = '<label for="apelLot2" style="margin-left:5%;display:inline;"><a style="color:black;" title= "pour CE2, CM1, CM2">%name%</label><input id="apelLot2" type="checkbox" name="%name%" style="margin-left: 118px;" value ="%name%" disabled="true"/><br>';
var lot2 = HTMLlot2Names.replace("%name%",EcoleLotNames[1]);
lot2 = lot2.replace("%name%",EcoleLotNames[1]);
lot2 = lot2.replace("%name%",EcoleLotNames[1]);
$("#apelEcoleLots").append(lot2);

// append Ecole optional lots - livres ce2
var HTMLlot3Names = '<label for="apelLot3" style="margin-left:5%;display:inline;"><a style="color:black;" title= "pour CE2">%name%<input id="apelLot3" type="checkbox" name="%name%" style="margin-left: 35px;" value ="%name%" disabled="true"/><br>';
var lot3 = HTMLlot3Names.replace("%name%",EcoleLotNames[2]);
lot3 = lot3.replace("%name%",EcoleLotNames[2]);
lot3 = lot3.replace("%name%",EcoleLotNames[2]);
$("#apelEcoleLots").append(lot3);


// append Ecole optional lots - Librairie ce1
var HTMLlot8Names = '<label for="apelLot8" style="margin-left:5%;display:inline;"><a style="color:black;" title= "Dictionnaire et Livres CE1">%name%<input id="apelLot8" type="checkbox" name="%name%" style="margin-left: 35px;" value ="%name%" disabled="true"/><br>';
var lot8 = HTMLlot8Names.replace("%name%",EcoleLotNames[5]);
lot8 = lot8.replace("%name%",EcoleLotNames[5]);
lot8 = lot8.replace("%name%",EcoleLotNames[5]);
$("#apelEcoleLots").append(lot8);



// append Ecole optional lots - calc
var HTMLlot6Names = '<label for="apelLot6" style="margin-left:5%;display:inline;"><a style="color:black;" title= "pour CM2">%name%<input id="apelLot6" type="checkbox" name="%name%" style="margin-left: 35px;" value ="%name%" disabled="true"/><br>';
var lot6 = HTMLlot6Names.replace("%name%",EcoleLotNames[3]);
lot6 = lot6.replace("%name%",EcoleLotNames[3]);
lot6 = lot6.replace("%name%",EcoleLotNames[3]);
$("#apelEcoleLots").append(lot6);

// append Ecole optional lots - etiquette
var HTMLlot7Names = '<label for="apelLot7" style="margin-left:5%;display:inline;"><a style="color:black;" title= "">%name%<input id="apelLot7" type="checkbox" name="%name%" style="margin-left: 35px;" value ="%name%" disabled="false"/><br>';
var lot7 = HTMLlot7Names.replace("%name%",EcoleLotNames[4]);
lot7 = lot7.replace("%name%",EcoleLotNames[4]);
lot7 = lot7.replace("%name%",EcoleLotNames[4]);
$("#apelEcoleLots").append(lot7);

//append College lots
var HTMLlot4Names = '<label for="apelLot4" style="margin-left:5%;display:inline;"><a style="color:black;">%name%<input id="apelLot4" type="checkbox" name="%name%" style="margin-left: 35px;" value ="%name%" disabled="false"/><br>';
var lot4 = HTMLlot4Names.replace("%name%",ColLotNames[0]);
lot4 = lot4.replace("%name%",ColLotNames[0]);
lot4 = lot4.replace("%name%",ColLotNames[0]);
$("#apelColLots").append(lot4);

//append College lots
var HTMLlot5Names = '<label for="apelLot5" style="margin-left:5%;display:inline;"><a style="color:black;" >%name%<input id="apelLot5" type="checkbox" name="%name%" style="margin-left: 35px;" value ="%name%" disabled="false"/><br>';
var lot5 = HTMLlot5Names.replace("%name%",ColLotNames[1]);
lot5 = lot5.replace("%name%",ColLotNames[1]);
lot5 = lot5.replace("%name%",ColLotNames[1]);
$("#apelColLots").append(lot5);

//enable ref input fields when etiquette selected
$("#apelLot7").attr("onchange","refEnable()");

function refEnable() {
    if ($("#apelLot7").prop("checked")) {
       $("#apelEcoleRefCouleur").prop("disabled",false);
       $("#apelEcoleRefEcri").prop("disabled",false);
       $("#apelEcoleRefDessin").prop("disabled",false);  
    }
    else {
       $("#apelEcoleRefCouleur").val("");
       $("#apelEcoleRefCouleur").prop("disabled",true);
       $("#apelEcoleRefEcri").val("");
       $("#apelEcoleRefEcri").prop("disabled",true);
       $("#apelEcoleRefDessin").val("");
       $("#apelEcoleRefDessin").prop("disabled",true);
       
    }
}


$("#apelEcoleNiveauEleve").attr("onchange","selectMyClasse()");
function selectMyClasse() {
     var myLevel = $("#apelEcoleNiveauEleve").val();
    switch (myLevel) {
        case "Elementaire":
            $("#apelLot1").prop("checked", false);
            $("#apelLot1").prop("disabled", true);
            $("#apelLot2").prop("checked", false);
            $("#apelLot2").prop("disabled", true);
            $("#apelLot3").prop("disabled", true);
            $("#apelLot3").prop("checked", false);
            $("#apelLot4").prop("disabled", true);
            $("#apelLot5").prop("disabled", true);
            $("#apelLot6").prop("disabled", true);
            $("#apelLot6").prop("checked", false);
            $("#apelLot7").prop("checked", false);
            $("#apelLot7").prop("disabled", false);
            break;
        //Maternelle
        default:
            $("#apelLot1").prop("checked", false);
            $("#apelLot1").prop("disabled", false);
            $("#apelLot2").prop("checked", false);
            $("#apelLot2").prop("disabled", true);
            $("#apelLot3").prop("disabled", true);
            $("#apelLot3").prop("checked", false);
            $("#apelLot4").prop("checked", false);
            $("#apelLot4").prop("disabled", true);
            $("#apelLot5").prop("disabled", true);
            $("#apelLot5").prop("checked", false);
            $("#apelLot6").prop("disabled", true);
            $("#apelLot6").prop("checked", false);
            $("#apelLot7").prop("checked", false);
            $("#apelLot7").prop("disabled", false);
            break;
    }
            $("#apelEcoleClasseEleve").empty();
            allMatEcClasses.forEach(function (classe) {
                    classe.display(myLevel);
            });
   // $("#apelEcoleLots").empty();
    
    /*var lotDefault = HTMLlotNames.replace("%name%",lotNames[0]);
        lotDefault = lotDefault.replace("%name%",lotNames[0]);
        var input1; $("#apelEcoleLots").append(lotDefault);
        //$(input1).attr("id","lot1");
*/}

$("#apelEcoleClasseEleve").attr("onchange","selectMyLot()");
function selectMyLot() {
    //var last = EcoleLotNames.length;
    //$("#apelEcoleLots").empty();
    
    var selClass = $("#apelEcoleClasseEleve").val();
    if ($("#apelEcoleNiveauEleve").val() === "Elementaire") {
        switch (selClass) {
          case 'CE1':
            $("#apelLot1").prop("checked", false);
            $("#apelLot1").prop("disabled", false);
            $("#apelLot2").prop("disabled", true);
            $("#apelLot2").prop("checked", false);  
            $("#apelLot3").prop("disabled", true);
            $("#apelLot3").prop("checked", false);
            $("#apelLot4").prop("checked", false);
            $("#apelLot4").prop("disabled", false);
            $("#apelLot5").prop("disabled", true);
            $("#apelLot5").prop("checked", false);
            $("#apelLot6").prop("disabled", true);
            $("#apelLot6").prop("checked", false);
            $("#apelLot7").prop("disabled", false);
            $("#apelLot7").prop("checked", false);
            $("#apelLot8").prop("disabled", false);
            $("#apelLot8").prop("checked", false);
            break;    
          case 'CE2':
            $("#apelLot2").prop("disabled", false);
            $("#apelLot2").prop("checked", false);   
            $("#apelLot3").prop("disabled", false);
            $("#apelLot3").prop("checked", false);
            $("#apelLot4").prop("checked", false);
            $("#apelLot4").prop("disabled", true);
            $("#apelLot5").prop("disabled", true);
            $("#apelLot5").prop("checked", false);
            $("#apelLot6").prop("disabled", true);
            $("#apelLot6").prop("checked", false);
            $("#apelLot7").prop("disabled", false);
            $("#apelLot7").prop("checked", false);
            $("#apelLot8").prop("disabled", true);
            $("#apelLot8").prop("checked", false);
            break;
          case 'CM1':
            $("#apelLot2").prop("disabled", false);
            $("#apelLot3").prop("disabled", true);
            $("#apelLot3").prop( "checked", false);
            $("#apelLot4").prop("checked", false);
            $("#apelLot4").prop("disabled", true);
            $("#apelLot5").prop("disabled", true);
            $("#apelLot5").prop("checked", false);
            $("#apelLot6").prop("disabled", true);
            $("#apelLot6").prop("checked", false);
            $("#apelLot7").prop("disabled", false);
            $("#apelLot7").prop("checked", false);
            $("#apelLot8").prop("disabled", true);
            $("#apelLot8").prop("checked", false);
            break;
          case 'CM2':
            $("#apelLot2").prop("disabled", false);
            $("#apelLot3").prop("disabled", true);
            $("#apelLot3").prop( "checked", false);
            $("#apelLot4").prop("checked", false);
            $("#apelLot4").prop("disabled", true);
            $("#apelLot5").prop("disabled", true);
            $("#apelLot5").prop("checked", false);
            $("#apelLot6").prop("disabled", false);
            $("#apelLot6").prop("checked", false);
            $("#apelLot7").prop("disabled", false);
            $("#apelLot7").prop("checked", false);
            $("#apelLot8").prop("disabled", true);
            $("#apelLot8").prop("checked", false);
            break;
          default:
            $("#apelLot2").prop("checked", false);
            $("#apelLot2").prop("disabled", true);
            $("#apelLot3").prop("disabled", true);
            $("#apelLot3").prop("checked", false);
            $("#apelLot4").prop("checked", false);
            $("#apelLot4").prop("disabled", true);
            $("#apelLot5").prop("disabled", true);
            $("#apelLot5").prop("checked", false);
            $("#apelLot6").prop("disabled", true);
            $("#apelLot6").prop("checked", false);
            $("#apelLot7").prop("disabled", false);
            $("#apelLot7").prop("checked", false);
            $("#apelLot8").prop("disabled", true);
            $("#apelLot8").prop("checked", false);
            break;
         }    
    }
  
}
    

$("#apelColClasseEleve").attr("onchange","selectMyColLot()");
function selectMyColLot() {
        $("#apelLot1").prop("checked", false);
        $("#apelLot1").prop("disabled", true);
        $("#apelLot2").prop("checked", false);
        $("#apelLot2").prop("disabled", true);
        $("#apelLot3").prop("disabled", true);
        $("#apelLot3").prop("checked", false);
        $("#apelLot4").prop("disabled", false);
        $("#apelLot5").prop("disabled", false);
        $("#apelLot6").prop("checked", false);
        $("#apelLot6").prop("disabled", true);
}

$("#apelEcoleNomEleve" )
  .change(function () {
    var str = "";
    str += $( this ).text() + " ";
    $("orderNomEleve" ).text( str );
  });
