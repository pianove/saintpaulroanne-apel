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
    "Passerelle",
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

var lotNames = [
    "1 Lot Fournitures Scolaires",
    "1 Dictionnaire",
    "Livres étudiés en classe"
];

 var levelNames = [
        'Maternelle',
        'Elementaire',
        'Collège'];

Classe.prototype.display = function(myLevel) {
    if (myLevel === this.level) {
        var el = HTMLoptionName.replace("%data%", this.name);
        el = el.replace("%val%", this.name);
        $("#apelClasseEleve").append(el);
    }
};


function instClasse(list, level) {
    var i = 0;
    var allClasses = [];
    for (i = 0; i < list.length; i++) {
        classe = new Classe();
        classe.name = list[i];
        classe.level = level;
        allClasses.push(classe); 
    }
    return allClasses;
};

var matClasses, 
    ecClasses,
    colClasses;

var allMatClasses = instClasse(classMatNames,levelNames[0]);

var allEcClasses = instClasse(classEcNames, levelNames[1]);
var allColClasses = instClasse(classColNames, levelNames[2]);
var all = allMatClasses.concat(allColClasses).concat(allEcClasses);
var list = lotNames;
var i = 0;

var allLots = [];
for (i = 0; i < list.length; i++) {
        lot = new Lot();
        lot.lotName = list[i];
        allLots.push(lot);
};


var articlePricesLotDefault = 20;
var articlePricesLotLivresc1 = 30;
var articlePricesLotLivresc2 = 25;
var articlePriceDico = 15;
var allArticles = [];
for (i = 0; i < all.length; i++) {
    article = new Article();
    article.articleClass = all[i].name;
    article.articleLotName = lotNames[0];
    article.articleLotPrice = articlePricesLotDefault; 
    allArticles.push(article);
};

// create article for CE1 - livres
    article = new Article();
    article.articleClass = "CE1";
    article.articleLotName = lotNames[2];
    article.articleLotPrice = articlePricesLotLivresc1; 
    allArticles.push(article);
// create article for CE1 - dico        
    article = new Article();
    article.articleClass = "CE1";
    article.articleLotName = lotNames[1];
    article.articleLotPrice = articlePriceDico;
    allArticles.push(article);
// create article for CE2 - livres
    article = new Article();
    article.articleClass = "CE2";
    article.articleLotName = lotNames[2];
    article.articleLotPrice = articlePricesLotLivresc2;
    allArticles.push(article);
// create article for CE2 - dico
    article = new Article();
    article.articleClass = "CE2";
    article.articleLotName = lotNames[1];
    article.articleLotPrice = articlePriceDico;
    allArticles.push(article);
// create article for CM1 - dico
    article = new Article();
    article.articleClass = "CM1";
    article.articleLotName = lotNames[1];
    article.articleLotPrice = articlePriceDico;
    allArticles.push(article);
// create article for CM2 - dico
    article = new Article();
    article.articleClass = "CM2";
    article.articleLotName = lotNames[1];
    article.articleLotPrice = articlePriceDico;
    allArticles.push(article);
// to store only euro sign
var initText = $("#apelOrderAmount").text();
function calcOrder() {
    selClass = $("#apelClasseEleve").val();
   
    var selLot = [];
    //http://www.sanwebe.com/2014/01/how-to-select-all-deselect-checkboxes-jquery
    $(":checkbox").each(function() {
        
        if (this.checked === true) {
        selLot.push(this.name);
        }
    });    
    
    
    console.log(selLot);
    var amount = 0;
    for (i = 0; i < selLot.length; i++) {
        allArticles.forEach(function (article){
            if (article.articleClass === selClass && 
               article.articleLotName === selLot[i]) {
                amount +=article.articleLotPrice;
            }
        });
    }
    var formattedAmount = amount + ",00 ";
    $("#apelOrderAmount").val(amount);
    //$("#apelOrderAmount").text(formattedAmount + initText);
    $("#apelOrderAmount").text(formattedAmount);
};



var HTMLoptionName = '<option value="%val%">%data%</option>';
list = levelNames;
for (i = 0; i < list.length; i++) {
    var el = HTMLoptionName.replace("%data%", list[i]);
    el = el.replace("%val%", list[i]);
    $("#apelNiveauEleve").append(el);
};

list=[];
list = classMatNames.concat(classEcNames).concat(classColNames);

//append default lot a commander
var HTMLlot1Names = '<label for="apelLot1" style="margin-left: 5%;display:inline;">%name%</label><input id="apelLot1" type="checkbox" name="%name%" style="margin-left: 10px;" value ="%name%" /><br>';
lotDefault = HTMLlot1Names.replace("%name%",lotNames[0]);
lotDefault = lotDefault.replace("%name%",lotNames[0]);
lotDefault = lotDefault.replace("%name%",lotNames[0]);

$("#apelLots").append(lotDefault);
// append optional lots
HTMLlot2Names = '<label for="apelLot2" style="margin-left:5%;display:inline;"><a style="color:black;" title= "pour CE1, CE2, CM1, CM2">%name%</label><input id="apelLot2" type="checkbox" name="%name%" style="margin-left: 118px;" value ="%name%" disabled="true"/><br>';
lot2 = HTMLlot2Names.replace("%name%",lotNames[1]);
lot2 = lot2.replace("%name%",lotNames[1]);
lot2 = lot2.replace("%name%",lotNames[1]);
$("#apelLots").append(lot2);

HTMLlot3Names = '<label for="apelLot3" style="margin-left:5%;display:inline;"><a style="color:black;" title= "pour CE1 et CE2">%name%<input id="apelLot3" type="checkbox" name="%name%" style="margin-left: 35px;" value ="%name%" disabled="true"/><br>';
lot3 = HTMLlot3Names.replace("%name%",lotNames[2]);
lot3 = lot3.replace("%name%",lotNames[2]);
lot3 = lot3.replace("%name%",lotNames[2]);
$("#apelLots").append(lot3);


$("apelLot1").attr("onchange",function() {
    
    if (this.checked) {
        console.log("attention")        
    }
});


$("#apelNiveauEleve").attr("onchange","selectMyClasse()");
function selectMyClasse() {
     var myLevel = $("#apelNiveauEleve").val();
    if (myLevel === "Collège" || "Maternelle"){
        $("#apelLot2").prop("checked", false);
        $("#apelLot2").prop("disabled", true);
        $("#apelLot3").prop("disabled", true);
        $("#apelLot3").prop("checked", false);   
    }
            $("#apelClasseEleve").empty();
            all.forEach(function (classe) {
                    classe.display(myLevel);
            });
   // $("#apelLots").empty();
    
    /*var lotDefault = HTMLlotNames.replace("%name%",lotNames[0]);
        lotDefault = lotDefault.replace("%name%",lotNames[0]);
        var input1; $("#apelLots").append(lotDefault);
        //$(input1).attr("id","lot1");
*/};

$("#apelClasseEleve").attr("onchange","selectMyLot()");
function selectMyLot() {
    var last = lotNames.length;
    //$("#apelLots").empty();
    
    var selClass = $("#apelClasseEleve").val();
    switch (selClass) {
      case 'CE1':
      case 'CE2':
        //last = lotNames.length;   
        //$("#apelLot2").text(lotNames[1]);
        
        $("#apelLot2").prop("disabled", false);
        $("#apelLot2").prop("checked", false);
            
        //$("#apelLot3").text (lotNames[2]);    
        $("#apelLot3").prop("disabled", false);
        $("#apelLot3").prop("checked", false);
        break;
     /* case 'CE2':
        last = lotNames.length;
           break;*/
      case 'CM1':
      case 'CM2':
        //last = lotNames.length - 1;
        //$("#apelLot2").text(lotNames[1]);  
        $("#apelLot2").prop("disabled", false);
        //$("#apelLot3").text = "";
        $("#apelLot3").prop("disabled", true);
        $("#apelLot3").prop( "checked", false );
        break;
      default:
        //$("#apelLot2").text = "";  
        //$("#apelLot2").empty();   
        $("#apelLot2").prop("checked", false);
        $("#apelLot2").prop("disabled", true);
        
        //$("#apelLot3").text = "";
        $("#apelLot3").prop("disabled", true);
        $("#apelLot3").prop("checked", false);   
        //$("#apelLot3").prop( "checked", false );
        break;
     }
   /* for (i = 0; i < last; i++) {
        
        var el = HTMLlotNames.replace("%name%",lotNames[i]);
        el = el.replace("%name%",lotNames[i]);
        $("#apelLots").append(el);    
    }*/
};

$("#apelNomEleve" )
  .change(function () {
    var str = "";
    str += $( this ).text() + " ";
    $("orderNomEleve" ).text( str );
  });
