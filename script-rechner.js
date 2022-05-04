document.getElementsByClassName('container')[0].style.display = "block";

function next(id) {
    document.getElementsByClassName('container')[id - 1].style.display = "none";
    document.getElementsByClassName('container')[id].style.display = "block";

}



function result() {      
    var score = 0;
    var erg = 1;

if (document.getElementById('1.1').checked) {
 score = score + 7.82;
}
if (document.getElementById('1.2').checked) {
 score = score + 4.30;
}
if (document.getElementById('1.3').checked) {
 score = score + 2.20;
}
if (document.getElementById('1.4').checked) {
 score = score + 0.68;
}
if (document.getElementById('1.4').checked) {
 score = score + 0.39;
}
//Frage 2           
if (document.getElementById('2.1').checked) {
 score = score + 0.94;
}
if (document.getElementById('2.2').checked) {
 score = score + 0.7;
}
if (document.getElementById('2.3').checked) {
 score = score + 0.56;
}
//Frage 3
if (document.getElementById('3.1').checked) {
 score = score - 0.03;
}
if (document.getElementById('3.2').checked) {
 score = score - 0.10;
}
if (document.getElementById('3.3').checked) {
 score = score - 0.22;
}
if (document.getElementById('3.4').checked) {
 score = score - 0.47;
}
//Frage 4
if (document.getElementById('4.1').checked) {
 score = score + 1.29;
}
if (document.getElementById('4.2').checked) {
 score = score + 0.97;
}
if (document.getElementById('4.3').checked) {
 score = score + 0.65;
}
if (document.getElementById('4.4').checked) {
 score = score + 0.48;
}
if (document.getElementById('4.5').checked) {
 score = score + 0.23;
}
if (document.getElementById('4.6').checked) {
 score = score + 0.09;
}
if (document.getElementById('4.7').checked) {
 score = score + 0.06;
}
//Frage 5
if (document.getElementById('5.1').checked) {
 score = score + 0.64;
}
if (document.getElementById('5.2').checked) {
 score = score + 0.48;
}
if (document.getElementById('5.3').checked) {
 score = score + 0.32;
}
if (document.getElementById('5.4').checked) {
 score = score + 0.04;
}
//Frage 6
if (document.getElementById('6.1').checked) {
 score = score + 0.81;
}
if (document.getElementById('6.2').checked) {
 score = score + 0.60;
}
if (document.getElementById('6.3').checked) {
 score = score + 0.40;
}
if (document.getElementById('6.4').checked) {
 score = score + 0.24;
}
if (document.getElementById('6.5').checked) {
 score = score + 0.10;
}
if (document.getElementById('6.6').checked) {
 score = score + 0.03;
}
if (document.getElementById('6.7').checked) {
 score = score + 0.02;
}
//Frage 7
if (document.getElementById('7.1').checked) {
 score = score + 0.21;
}
if (document.getElementById('7.2').checked) {
 score = score + 0.14;
}
if (document.getElementById('7.3').checked) {
 score = score + 0.06;
}
if (document.getElementById('7.4').checked) {
 score = score + 0.03;
}
if (document.getElementById('7.5').checked) {
 score = score + 0.01;
}
if (document.getElementById('7.6').checked) {
 score = score + 0.01;
}
//Frage 8
if (document.getElementById('8.1').checked) {
 score = score + 0.00;
}
if (document.getElementById('8.2').checked) {
 score = score - 0.07;
}
if (document.getElementById('8.3').checked) {
 score = score - 0.30;
}
if (document.getElementById('8.4').checked) {
 score = score - 0.45;
}
//Frage 9
if (document.getElementById('9.1').checked) {
 score = score + 0.32;
}
if (document.getElementById('9.2').checked) {
 score = score + 0.01;
}
if (document.getElementById('9.3').checked) {
 score = score - 0.15;
}
if (document.getElementById('9.4').checked) {
 score = score - 0.15;
}
//Frage 10
if (document.getElementById('10.1').checked) {
 score = score + 4.47;
}
if (document.getElementById('10.2').checked) {
 score = score + 2.68;
}
if (document.getElementById('10.3').checked) {
 score = score + 1.67;
}
if (document.getElementById('10.4').checked) {
 score = score + 0.89;
}
if (document.getElementById('10.5').checked) {
 score = score + 0.39;
}
if (document.getElementById('10.6').checked) {
 score = score + 0.17;
}
if (document.getElementById('10.7').checked) {
 score = score + 0.00;
}
//Frage 11
if (document.getElementById('11.1').checked) {
 score = score + 18.12;
}
if (document.getElementById('11.2').checked) {
 score = score + 6.62;
}
if (document.getElementById('11.3').checked) {
 score = score + 3.62;
}
if (document.getElementById('11.4').checked) {
 score = score + 2.08;
}
if (document.getElementById('11.5').checked) {
 score = score + 0.91;
}
if (document.getElementById('11.6').checked) {
 score = score + 0.27;
}
if (document.getElementById('11.7').checked) {
 score = score + 0.00;
}
//Frage 12
if (document.getElementById('12.1').checked) {
 score = score + 2.52;
}
if (document.getElementById('12.2').checked) {
 score = score + 2.18;
}
if (document.getElementById('12.3').checked) {
 score = score + 1.89;
}
if (document.getElementById('12.4').checked) {
 score = score + 1.38;
}
if (document.getElementById('12.5').checked) {
 score = score + 1.05;
}
if (document.getElementById('12.6').checked) {
 score = score + 0.90;
}
if (document.getElementById('12.7').checked) {
 score = score + 0.74;
}
if (document.getElementById('12.8').checked) {
 score = score + 0.17;
}
if (document.getElementById('12.9').checked) {
 score = score + 0.18;
}
if (document.getElementById('12.10').checked) {
 score = score + 1.26;
}
//Frage 13
if (document.getElementById('13.1').checked) {
 score = score + 0.05;
}
if (document.getElementById('13.2').checked) {
 score = score - 0.35;
}
if (document.getElementById('13.3').checked) {
 score = score - 0.53;
}
if (document.getElementById('13.4').checked) {
 score = score - 0.30;
}
if (document.getElementById('13.5').checked) {
 score = score - 0.61;
}
if (document.getElementById('13.6').checked) {
 score = score - 0.71;
}
if (document.getElementById('13.7').checked) {
 score = score - 1.02;
}
//Frage 14
if (document.getElementById('14.1').checked) {
 score = score + 4.12;
}
if (document.getElementById('14.2').checked) {
 score = score + 3.23;
}
if (document.getElementById('14.3').checked) {
 score = score + 1.90;
}
if (document.getElementById('14.4').checked) {
 score = score + 1.23;
}
if (document.getElementById('14.5').checked) {
 score = score + 0.79;
}
if (document.getElementById('14.6').checked) {
 score = score + 0.35;
}
if (document.getElementById('14.7').checked) {
 score = score - 0.10;
}
if (document.getElementById('14.8').checked) {
 score = score - 0.54;
}
//Frage 15
if (document.getElementById('15.1').checked) {
 score = score + 0.47;
}
if (document.getElementById('15.2').checked) {
 score = score + 0.00;
}
if (document.getElementById('15.3').checked) {
 score = score - 0.15;
}
if (document.getElementById('15.4').checked) {
 score = score - 0.22;
}
if (document.getElementById('15.5').checked) {
 score = score - 0.26;
}
if (document.getElementById('15.6').checked) {
 score = score - 0.29;
}
if (document.getElementById('15.7').checked) {
 score = score - 0.31;
}
//Frage 16
if (document.getElementById('16.1').checked) {
 score = score + 0.01;
}
if (document.getElementById('16.2').checked) {
 score = score + 0.00;
}
if (document.getElementById('16.3').checked) {
 score = score - 0.01;
}
if (document.getElementById('16.4').checked) {
 score = score - 0.02;
}
//Frage 17
if (document.getElementById('17.1').checked) {
 score = score + 0.03;
}
if (document.getElementById('17.2').checked) {
 score = score + 0.00;
}
//Frage 18
if (document.getElementById('18.1').checked) {
 score = score + 0.53;
}
if (document.getElementById('18.2').checked) {
 score = score + 0.46;
}
if (document.getElementById('18.3').checked) {
 score = score + 0.40;
}
if (document.getElementById('18.4').checked) {
 score = score + 0.29;
}
if (document.getElementById('18.5').checked) {
 score = score + 0.15;
}
if (document.getElementById('18.6').checked) {
 score = score + 0.19;
}
if (document.getElementById('18.7').checked) {
 score = score + 0.15;
}
if (document.getElementById('18.8').checked) {
 score = score + 0.04;
}
if (document.getElementById('18.9').checked) {
 score = score + 0.03;
}
//Frage 19
if (document.getElementById('19.1').checked) {
 score = score + 0.16;
}
if (document.getElementById('19.2').checked) {
 score = score + 0.13;
}
if (document.getElementById('19.3').checked) {
 score = score + 0.09;
}
if (document.getElementById('19.4').checked) {
 score = score + 0.08;
}
if (document.getElementById('19.5').checked) {
 score = score + 0.16;
}
if (document.getElementById('19.6').checked) {
 score = score + 0.11;
}
//Frage 20
if (document.getElementById('20.1').checked) {
 score = score + 0.32;
}
if (document.getElementById('20.2').checked) {
 score = score + 0.11;
}
if (document.getElementById('20.3').checked) {
 score = score + 0.08;
}
//Frage 21
if (document.getElementById('21.1').checked) {
 score = score + 0.02;
}
if (document.getElementById('21.2').checked) {
 score = score + 0.02;
}
if (document.getElementById('21.3').checked) {
 score = score + 0.01;
}
//Ende der Zusammenrechnung

erg = score;


document.getElementById("erg").innerHTML = erg;

dialogOeffnen('loslegen-dialog');

}





function dialogOeffnen(dialogId) {
    
    
    document.getElementById(dialogId).classList.add("sichtbar");
    document.getElementById("body-overlay").classList.add("sichtbar");
}

function dialogSchliessen(dialogId) {
    document.getElementById(dialogId).classList.remove("sichtbar");
    document.getElementById("body-overlay").classList.remove("sichtbar");

  

    
}




















