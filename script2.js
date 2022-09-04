// APP starts
// Variables
let submitBtn = document.getElementById("submit");
// let resultsBox = document.getElementById("resultsBox");
let bundle = document.getElementById("bundle");
let USOCS = [];
let CS = document.getElementById("CS");
let LST = document.getElementById("LST");
let USOClist = document.getElementById("USOClist");
// Indicator services
let InternetIndicator = false;


// technology indicator
let FTTNindicator = false;

// MODEM
let HH2K = document.getElementById("HH2K");
let HH3K = document.getElementById("HH3K");


// FTTH
let Fibe15FTTH = document.getElementById("Fibe15FTTH");
let Fibe25FTTH = document.getElementById("Fibe25FTTH");
let Fibe50FTTH = document.getElementById("Fibe50FTTH");
let Fibe150FTTH = document.getElementById("Fibe150FTTH");


// TV

let FibeTVAPP = document.getElementById("FibeTVAPP");

// technology

let FTTN = document.getElementById("FTTNindicator");



// functions

// SUBMIT Btn Function
submitBtn.addEventListener("click", submit);

// Generate USOC List Function
function generateList(value) {
        
    let USOCelement = document.createElement("li");
    USOCelement.className = "list-group-item list-group-item-action list-group-item-danger"

    USOCelement.innerHTML = value;

    USOClist.appendChild(USOCelement);
}

function submit() {
  // CHECK for previous Search and clear Results
  if (USOCS != []){
    USOCS = [];
    USOClist.innerHTML = "";
    InternetIndicator = false;
    FTTNindicator = false;
    HPIndicator = false;
  }

  // S C A N S

    // SCAN Technology
    if (FTTN.checked == true) {
      FTTNindicator = true;
      // USOCS.push("WDATA");  
  
    }

    // SCAN TV
  if (FibeTVAPP.checked == true) {
        USOCS.push("*** VIRGIN TV - NO USOC NEEDED ***"); 
    }

    else {
    // NO TV
    }

  // SCAN MODEM 
  if (HH2K.checked == true) { 

    USOCS.push("HNSYM (modem)");

  }
  else if (HH3K.checked == true) {
    USOCS.push("NGMOD (modem)"); 
  }

  else { 
    resultsBox.innerHTML = "MISSING MODEM USOC";
  }

  // SCAN INTERNET  
  if (Fibe15FTTH.checked == true) {
    InternetIndicator = true;
    if (FTTNindicator == true){
        USOCS.push("DSLUM");
    } 
    else {
        USOCS.push("DSLUM");
    }    
  }

  else if (Fibe25FTTH.checked == true) {
    InternetIndicator = true; 
    if (FTTNindicator == true){
        USOCS.push("DSLSN");
    } 
    else {
        USOCS.push("DSLVC"); 
    }  
  }

  else if (Fibe50FTTH.checked == true) {
    InternetIndicator = true;
    if (FTTNindicator == true){
        USOCS.push("DSLFA");
    } 
    else {
        USOCS.push("DSLVD"); 
    }   
  }
  else if (Fibe150FTTH.checked == true) {
    InternetIndicator = true;
    if (FTTNindicator == true){
        USOCS.push("DSLFC");
        USOCS.push("PBOND");
    } 
    else {
        USOCS.push("DSLVE"); 
    } 
  }
  
  else {
    InternetIndicator = false  
    resultsBox.innerHTML = "";
  }

  // BUNDLE type
  // INT (SINGLE)
  if (InternetIndicator == true && FTTNindicator == false && HPIndicator == false){

    // MESSEGE about bundle
    bundle.innerHTML = "INTERNET ONLY";

    if (FibeTVAPP.checked == true) {
        bundle.innerHTML = "INTERNET / VTV - DUO";
    }


    // PRINT INFORMATION and send to USOC array

    LST.innerHTML = "LST: DERXX"
    CS.innerHTML = "CS: DRYXX"

    // pushing USOCs
    USOCS.push("FTTHR (Fibre to the Home)");
    USOCS.push("1RDDL (Main dry loop)");
    USOCS.push("RDSLC (DSL access w/o HP)");  
    USOCS.push("V1RGN (Virgin)"); 
     
    
    // Generate List
    USOCS.forEach(generateList);

  }

  // INT SINGLE FTTN
  if (InternetIndicator == true && FTTNindicator == true && HPIndicator == false){

    // MESSEGE about bundle
    bundle.innerHTML = "INTERNET ONLY";

    if (FibeTVAPP.checked == true) {
        bundle.innerHTML = "INTERNET / VTV - DUO";
    }


    // PRINT INFORMATION and send to USOC array

    LST.innerHTML = "LST: DERXX"
    CS.innerHTML = "CS: DRYXX"

    // pushing USOCs
    USOCS.push("1RDDL (Main dry loop)");
    USOCS.push("RDSLC (DSL access w/o HP)"); 
    USOCS.push("V1RGN (Virgin)");  
     
    
    // Generate List
    USOCS.forEach(generateList);

  }
  

}

// APP ends

// USOC DATA -----------------------------------------------------------------------------

// SINGLE INT
let Int = {
    
    CS: "DRYXX",
    LST: "DERXX",
    mandatoryU: "1RDDL (Main dry loop) ",
    mandatoryU2: "1RDDL (DSL access w/o HP) ",

    // ATM
    essentialPLus: ["DSLSK", "DSLSU", "DSLSG", "DSLFT", "DSLBS", "DSLSW"],
    bellInternet: ["DSLSJ" , "DSLO3", "DSLO4", "blank", "DSLSK"],

    // FTTN
    FibeInternet: ["DSLSP", "DSLSH"],
    Fibe15: "DSLUM",
    Fibe25: "DSLSN",
    Fibe50: "DSLFA",
    Fibe100: "DSLFC",

    // FTTH
    Fibe150: "DSLFC",
    Fibe500: "DSLFD",
    Fibe1GB: "DSLFB",
    Fibe15GB: "DSLFF" 

}

// INT + TV
let IntTV = {
    
    CS: "VLRXX",
    LST: "DERXX",
    mandatoryU: "1RDDL (Main dry loop) ",
    mandatoryU2: "WDATA (TV access) ",

    // ATM
    essentialPLus: "VLU65, VLU45, VLR35, VLR25",
    Fibe25: "DSLSN",
    Fibe50: "DSLFA",
    Fibe100: "DSLFC",

    // FTTH
    Fibe150: "DSLFC",
    Fibe500: "DSLFD",
    Fibe1GB: "DSLFB",
    Fibe15GB: "DSLFF"

}

// INT + HP
let IntHP = {
    // ATM
    CS: "DRYXX",
    LST: "DERXX",
    mandatoryU: "1RDDL (Main dry loop) ",
    mandatoryU2: "1RDDL (DSL access w/o HP) ",
    essentialPLus: "DSLSK      , DSLSU, SG, FT, BS, SW",
    bellInternet: "DSLSJ     , DSLO3, DSLO4, blank, DSLSK",
    // FTTN
    FibeInternet: "DSLSP, DSLSH",
    Fibe15: "DSLUM",
    Fibe25: "DSLSN",
    Fibe50: "DSLFA",
    Fibe100: "DSLFC",

    // FTTH
    Fibe150: "DSLFC",
    Fibe500: "DSLFD",
    Fibe1GB: "DSLFB",
    Fibe15GB: "DSLFF" 

}

// INT + TV + HP
let IntTVHP = {
    // ATM
    CS: "DRYXX",
    LST: "DERXX",
    mandatoryU: "1RDDL (Main dry loop) ",
    mandatoryU2: "1RDDL (DSL access w/o HP) ",
    essentialPLus: "DSLSK      , DSLSU, SG, FT, BS, SW",
    bellInternet: "DSLSJ     , DSLO3, DSLO4, blank, DSLSK",
    // FTTN
    FibeInternet: "DSLSP, DSLSH",
    Fibe15: "DSLUM",
    Fibe25: "DSLSN",
    Fibe50: "DSLFA",
    Fibe100: "DSLFC",

    // FTTH
    Fibe150: "DSLFC",
    Fibe500: "DSLFD",
    Fibe1GB: "DSLFB",
    Fibe15GB: "DSLFF" 

}