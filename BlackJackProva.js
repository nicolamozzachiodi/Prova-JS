function getRandomArbitrary() {
    return Math.random() * (10 - 1) + 1;
}

var a = getRandomArbitrary();
var b = getRandomArbitrary();
var c = getRandomArbitrary();
var d = getRandomArbitrary();

var banchiere = a + b;
var player = c + d;

console.log("Il banchiere ha totalizzato " + Math.round(banchiere));
console.log("Il giocatore ha totalizzato " + Math.round(player));

if (banchiere >= player && banchiere <=15){
    console.log("Banchiere Vince");
    }
    else if (banchiere < player && player <=15)
    {
        console.log("Player Vince");
    }
    else {
        console.log("Non vince nessuno");
    }