const eta = prompt("qual è la tua èta");    
const km = prompt("quanti km vuoi peccorrere"); 
const prezzokm =0.21;
let prezzo=prezzokm*km;
let totale=0.00 ;

if(eta<18)
{
totale=(prezzo*20)/100;
alert("il prezzo per te è:"+totale);
}
else if(eta>65)
{
    totale=(totale*40)/100;
    alert("il prezzo per te è:"+totale);
}
else if((eta>=18 ) && (eta<=65))
{
    totale=prezzo;
    alert("il prezzo per te è:"+totale);
}

document.getElementById("bigliettoPrezzo").innerHTML="il totale è:€ "+totale;