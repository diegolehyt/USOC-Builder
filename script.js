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
let TVIndicator = false;
let HPIndicator = false;

let HPCIndicator = false;
let HPLIndicator = false;
let HPAIndicator = false;

// MODEM
let HH2K = document.getElementById("HH2K");
let HH3K = document.getElementById("HH3K");
let HH4K = document.getElementById("HH4K");
let HH6K = document.getElementById("HH6K");

// FTTH
let Fibe15FTTH = document.getElementById("Fibe15FTTH");
let Fibe25FTTH = document.getElementById("Fibe25FTTH");
let Fibe50FTTH = document.getElementById("Fibe50FTTH");
let Fibe150FTTH = document.getElementById("Fibe150FTTH");
let Fibe500FTTH = document.getElementById("Fibe500FTTH");
let Fibe1000FTTH = document.getElementById("Fibe1000FTTH");
let Fibe1500FTTH = document.getElementById("Fibe1500FTTH");
let Fibe3000FTTH = document.getElementById("Fibe3000FTTH");

// TV
let FibeTV = document.getElementById("FibeTV");
let FibeTVAPP = document.getElementById("FibeTVAPP");
let SATTV = document.getElementById("SATTV");

// HP pkg Display
let dryloop = document.getElementById("dryloop");

let HPC = document.getElementById("HPC");
let HPL = document.getElementById("HPL");
let HPA = document.getElementById("HPA");

let provinceBox = document.getElementById("provinceBox");

dryloop.addEventListener("click", NOHP);
HPC.addEventListener("click", WHP);

function NOHP(){
  provinceBox.setAttribute("class", "nodisplay");
}

function WHP(){
  provinceBox.setAttribute("class", "display");
}


// functions

// SUBMIT Btn Function
submitBtn.addEventListener("click", submit);

// Generate USOC List Function
function generateList(value) {
        
    let USOCelement = document.createElement("li");
    USOCelement.className = "list-group-item list-group-item-action list-group-item-info"

    USOCelement.innerHTML = value;

    USOClist.appendChild(USOCelement);
}

function submit() {
  // CHECK for previous Search and clear Results
  if (USOCS != []){
    USOCS = [];
    USOClist.innerHTML = "";
    InternetIndicator = false;
    TVIndicator = false;
    HPIndicator = false;

    HPCIndicator = false;
    HPLIndicator = false;
    HPAIndicator = false;
  }

  // S C A N S
    // SCAN TV
    if (FibeTV.checked == true) {
        TVIndicator = true;
        // USOCS.push("WDATA");  
    
    }
    else if (FibeTVAPP.checked == true) {
        USOCS.push("*** Fibe TV App - NO USOC NEEDED ***"); 
    }
    else if (SATTV.checked == true) {
        USOCS.push("*** Satellite TV - NO USOC NEEDED ***"); 
    }
    else {
    // NO TV
    }

  // SCAN MODEM 
  if (HH2K.checked == true) { 
    if (TVIndicator == false){
        USOCS.push("HNSYM (modem)");
    } 
    else {
        USOCS.push("*** Fibe TV w/ HH 2000 - NO MODEM USOC NEEDED ***"); 
    }
  }
  else if (HH3K.checked == true) {
    USOCS.push("NGMOD (modem)"); 
  }
  else if (HH4K.checked == true) {
    USOCS.push("4KMOD (modem)"); 
  }
  else if (HH6K.checked == true) {
    USOCS.push("6EMOD (modem)"); 
  }
  else { 
    resultsBox.innerHTML = "NO MODEM USOCS NEEDED";
  }

  // SCAN INTERNET  
  if (Fibe15FTTH.checked == true) {
    InternetIndicator = true;
    if (TVIndicator == true){
        USOCS.push("VLU19");
    } 
    else {
        USOCS.push("DSLUM");
    }    
  }

  else if (Fibe25FTTH.checked == true) {
    InternetIndicator = true; 
    if (TVIndicator == true){
        USOCS.push("VLU25");
    } 
    else {
        USOCS.push("DSLSN"); 
    }  
  }

  else if (Fibe50FTTH.checked == true) {
    InternetIndicator = true;
    if (TVIndicator == true){
        USOCS.push("VLRFA");
    } 
    else {
        USOCS.push("DSLFA"); 
    }   
  }
  else if (Fibe150FTTH.checked == true) {
    InternetIndicator = true;
    if (TVIndicator == true){
        USOCS.push("VLRFC");
    } 
    else {
        USOCS.push("DSLFC"); 
    } 
  }
  else if (Fibe500FTTH.checked == true) {
    InternetIndicator = true;
    if (TVIndicator == true){
        USOCS.push("VLRFD");
    } 
    else {
        USOCS.push("DSLFD"); 
    } 
  }
  else if (Fibe1000FTTH.checked == true) {
    InternetIndicator = true;
    if (TVIndicator == true){
        USOCS.push("VLRFB");
    } 
    else {
        USOCS.push("DSLFB"); 
    } 
  }
  else if (Fibe1500FTTH.checked == true) {
    InternetIndicator = true;
    if (TVIndicator == true){
        USOCS.push("VLRFF");
    } 
    else {
        USOCS.push("DSLFF"); 
    } 
  }
  else if (Fibe3000FTTH.checked == true) {
    InternetIndicator = true;
    if (TVIndicator == true){
        USOCS.push("VLRFX");
    } 
    else {
        USOCS.push("DSLFX"); 
    } 
  }
  else {
    InternetIndicator = false  
    resultsBox.innerHTML = "";
  }


  // HP SCAN

  if (HPC.checked == true) {
    HPIndicator = true; 
    HPCIndicator = true; 

   

    // HP Choice USOCs
    USOCS.push("TTR");
    USOCS.push("RL911");

    // long distance plan
    USOCS.push("PM1NO");
    USOCS.push("NAULP");

    USOCS.push("1K115 (HP Choice)");
    USOCS.push("MSEVM");
    USOCS.push("MSPGR");

    // features
    USOCS.push("1M125");
    USOCS.push("1M133");
    USOCS.push("1M135");
    USOCS.push("1M144");
    USOCS.push("1M146");
    USOCS.push("1M147");
    USOCS.push("1M149");
    USOCS.push("1M153");
    USOCS.push("1M517");

    // credits
    USOCS.push("1A624 (credit $46.56)");
    USOCS.push("1A775 (credit)");
    USOCS.push("1K563 (credit)");


       
    
  }

  else if (HPL.checked == true) {
    HPIndicator = true; 
    HPLIndicator = true;

    USOCS.push("1K111");
  
  }


  // BUNDLE type
  // INT (SINGLE)
  if (InternetIndicator == true && TVIndicator == false && HPIndicator == false){

    // MESSEGE about bundle
    bundle.innerHTML = "INTERNET ONLY";

    if (FibeTVAPP.checked == true) {
        bundle.innerHTML = "INTERNET / Fibe TV App - DUO";
    }
    else if (SATTV.checked == true) {
        bundle.innerHTML = "INTERNET / Satellite TV - DUO";
    }

    // PRINT INFORMATION and send to USOC array

    LST.innerHTML = "LST: DERXX"
    CS.innerHTML = "CS: DRYXX"

    // pushing USOCs
    USOCS.push("FTTHR (Fibre to the Home)");
    USOCS.push("1RDDL (Main dry loop)");
    USOCS.push("RDSLC (DSL access w/o HP)");  
     
    
    // Generate List
    USOCS.forEach(generateList);

  }
  
  // INT + TV (DUO)
  if (InternetIndicator == true && TVIndicator == true && HPIndicator == false){

    bundle.innerHTML = "INTERNET / Fibe TV - DUO";

    CS.innerHTML = "CS: VLRXX"
    LST.innerHTML = "LST: DERXX"

    // pushing USOCs
    USOCS.push("FTTHR (Fibre to the Home)");
    USOCS.push("1RDDL (Main dry loop)");
    USOCS.push("WDATA (DSL with Fibe TV)");  
     
    
    // Generate List
    USOCS.forEach(generateList);

  }

  // INT + HP (DUO)
  if (InternetIndicator == true && TVIndicator == false && HPIndicator == true){

    bundle.innerHTML = "INTERNET / Home Phone - DUO";

    CS.innerHTML = "CS: 1LRCP"
    LST.innerHTML = "LST: 1LR"

    // pushing USOCs
    USOCS.push("1LRCP (Main dry loop w/ HP)");

    // FTTH
    USOCS.push("FTTHR (Fibre to the Home)");
    USOCS.push("RGATA (VOIP)");
    USOCS.push("MQOSR (VOIP)");
      
    
    // Generate List
    USOCS.forEach(generateList);

  }

  // TV + HP (DUO)
  if (InternetIndicator == false && TVIndicator == true && HPIndicator == true){

    bundle.innerHTML = "INTERNET / Fibe TV / Home Phone - TRIO";

    CS.innerHTML = "CS: VLR"
    LST.innerHTML = "LST: 1LRCP"

    // pushing USOCs
    USOCS.push("1LRCP (Main dry loop w/ HP)");
    USOCS.push("WDATA (DSL w/ Fibe TV)");


    // FTTH
    USOCS.push("FTTHR (Fibre to the Home)");
    USOCS.push("RGATA (VOIP)");
    USOCS.push("MQOSR (VOIP)");
      
    
    // Generate List
    USOCS.forEach(generateList);

  }

  // INT + TV + HP (trio)
  if (InternetIndicator == true && TVIndicator == true && HPIndicator == true){

    bundle.innerHTML = "INTERNET / Fibe TV / Home Phone - TRIO";

    CS.innerHTML = "CS: VLR"
    LST.innerHTML = "LST: 1LRCP"

    // pushing USOCs
    USOCS.push("1LRCP (Main dry loop w/ HP)");
    USOCS.push("WDATA (DSL w/ Fibe TV)"); 
    // FTTH
    USOCS.push("FTTHR (Fibre to the Home)");
    USOCS.push("RGATA (VOIP)");
    USOCS.push("MQOSR (VOIP)");
      
    
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