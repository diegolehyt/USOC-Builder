// APP starts
// Variables
let modem = {
    HomeHub2000: "HNSYM",
    HomeHub3000: "NGMOD",
    HomeHub4000: "4KMOD"
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