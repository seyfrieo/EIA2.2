/*
        Aufgabe: (Aufgabe 2)
        Name: (Dominik Seyfried)
        Matrikel: (256734)
        Datum: (13.04.2018)
        Hiermit versichere ich, dass ich diesen
        Code selbst geschrieben habe. Er wurde
        nicht kopiert und auch nicht diktiert.
*/
var Memory;
(function (Memory) {
    document.addEventListener("DOMContentLoaded", init);
    //Abfrage Spieleranzahl/Paaranzahl
    function init() {
        var pairs = prompt("Mit wie vielen Kartenpaaren m�chtest du spielen? (Von 5 bis 7)");
        var pairsSum = parseInt(pairs);
        if (isNaN(pairsSum) || pairsSum < 5 || pairsSum > 10) {
            alert("VON 5 BIS 7!!!");
            init();
        }
        else {
            console.log("correct");
            var player = prompt("Spieleranzahl (Bis 4 Spieler)");
            var playerSum = parseInt(player);
            if (isNaN(playerSum) || playerSum < 1 || playerSum > 4) {
                alert("FALSCH");
                init();
            }
            else {
                console.log("correct input");
                createGame(pairsSum, playerSum);
            }
        }
    }
    // init endet hier
    //kompletter Content
    var cardContent = ["images/karten/0.jpg", "images/karten/1.jpg", "images/karten/0.jpg", "images/karten/2.jpg", "images/karten/3.jpg", "images/karten/4.jpg", "images/karten/5.jpg", "images/karten/6.jpg", "images/karten/7.jpg"];
    console.log("total content " + cardContent);
    //content wird verdoppelt
    doubleArray(cardContent, cardContentNeeded, _pairs);
    console.log("doubled | needed content " + cardContentNeeded);
    //mischen
    cardContentNeeded.sort(function () { return 0.5 - Math.random(); });
    console.log("doubled | needed | randomized content " + cardContentNeeded);
    console.log(cardContentNeeded.length);
})(Memory || (Memory = {}));
//# sourceMappingURL=memory.js.map