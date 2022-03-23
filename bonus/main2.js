const sceltaPoD = promt("scegli pari o dispari");
const sceltaNumero =promt("inserisci un numero d 1 A 9");
const scelta1 = parseInt(sceltaNumero);

constsceltaPc = Math.floor(Math.random()*9+1);
const scelta2 = parseInt(sceltaPc);

const somma = scelta1 + scelta2;


if((sceltaPoD == "pari") && (somma % 2==0))
{
    alert("hai vinto !");
}
else if((sceltaPoD == "pari") && (somma % 2 != 0))
{
    alert("hai perso");
}
 else if((sceltaPoD == "dispari") && (somma % 2 == 0))
{
    alert("hai perso");
}
 else if((sceltaPoD == "dispari") && (somma % 2 != 0))
{
    alert("hai vinto");
}
