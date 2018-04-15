/*
        Aufgabe: (Aufgabe 2)
        Name: (Dominik Seyfried)
        Matrikel: (256734)
        Datum: (13.04.2018)
        Hiermit versichere ich, dass ich diesen
        Code selbst geschrieben habe. Er wurde
        nicht kopiert und auch nicht diktiert.
*/

namespace Memory {

   document.addEventListener("DOMContentLoaded", init);
    
//Abfrage Spieleranzahl/Paaranzahl
    
    function init(): void {
    
    let pairs : string = prompt("Mit wie vielen Kartenpaaren möchtest du spielen? (Von 5 bis 7)")
    let pairsSum : number = parseInt(pairs)
    
    if (isNaN(pairsSum) || pairsSum < 5 || pairsSum > 10) {
        alert("VON 5 BIS 7!!!")
        init();    
    }
    
        else {
            
            console.log("correct");
            let player : string = prompt("Spieleranzahl (Bis 4 Spieler)")
            let playerSum : number = parseInt(player)
        
            if (isNaN(playerSum) || playerSum < 1 || playerSum > 4) {
                alert("FALSCH")
                init();    
            }
            
            else {
                console.log("correct input");
                createGame(pairsSum,playerSum);
                }
        }
}

// init endet hier

    
    //kompletter Content
    let cardContent : string[] = ["images/karten/0.jpg","images/karten/1.jpg","images/karten/0.jpg","images/karten/2.jpg","images/karten/3.jpg","images/karten/4.jpg","images/karten/5.jpg","images/karten/6.jpg", "images/karten/7.jpg"];
    console.log("total content " + cardContent);
    
    //content wird verdoppelt
    doubleArray(cardContent,cardContentNeeded,_pairs);
    console.log("doubled | needed content " + cardContentNeeded); 
    
    //mischen
    cardContentNeeded.sort(function(){return 0.5 - Math.random()});
    console.log("doubled | needed | randomized content " + cardContentNeeded); 
    console.log(cardContentNeeded.length);
 