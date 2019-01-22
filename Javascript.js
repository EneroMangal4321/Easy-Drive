/*var auto10 = 350;
var auto20 = 700;   
var auto50 = 1750;  
var autoLos =  50;
var autoTheorie_Praktijk = 120;
var autoTheorie = 90;
var Vracht10 = 450;
var Vracht20 = 900;
var Vracht50 = 2250;
var VrachtLos = 60
var VrachtTheorie_Praktijk = 210;
var VrachtTheorie = 180;
var Motor10 =  250;
var Motor20 =  500;
var Motor50 =  1250;
var MotorLos = 40;
var MotorTheorie_Praktijk = 100;
var MotorTheorie = 70;*/

function bereken(x, y) {
    if (y === undefined){
        y = 1;
    }
    return x*y;
}
document.getElementsByClassName('test').innerHTML = bereken();







