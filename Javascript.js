//Alle pakketten
var theorieAuto = 30;
var theorieMotor = 30;
var theorieVrachtwagen = 30;
var rijlesAuto15Uur = 600;
var rijlesAuto30Uur = 1200;
var rijlesAuto40Uur = 1500;
var rijlesMotor15Uur = 600;
var rijlesMotor30Uur = 1200;
var rijlesMotor40Uur = 1500;
var rijlesVrachtwagen15Uur = 600;
var rijlesVrachtwagen30Uur = 1200;
var rijlesVrachtwagen40Uur = 1500;
//Einde alle pakketten

//pakketten veranderen naar floats

//Einde van floats maken

//Berekenen hoeveel er in je winkelwagentje zit
function bereken(){
    var pakketten = [theorieAuto, theorieMotor, theorieVrachtwagen, rijlesAuto15Uur, rijlesAuto30Uur, rijlesAuto40Uur, rijlesMotor15Uur, rijlesMotor30Uur,
    rijlesMotor40Uur, rijlesVrachtwagen15Uur, rijlesVrachtwagen30Uur, rijlesVrachtwagen40Uur ];
    var welke = document.getElementById('').Value;

    document.getElementById('').innerHTML = pakketten[welke];
}