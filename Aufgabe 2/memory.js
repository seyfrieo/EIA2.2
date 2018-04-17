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
        //Abfrage Kartenpaare
        let paare = prompt("Mit wie vielen Kartenpaaren m�chtest du spielen? (Von 5 bis 8)");
        let paareAnz = parseInt(paare);
        if (isNaN(paareAnz) || paareAnz < 5 || paareAnz > 10) {
            alert("VON 5 BIS 7!!!");
            init();
        }
        else {
            console.log("correct");
            //Abfrage Spieler
            let spieler = prompt("Spieleranzahl (Bis 4 Spieler)");
            let spielerAnz = parseInt(spieler);
            if (isNaN(spielerAnz) || spielerAnz < 1 || spielerAnz > 4) {
                alert("FALSCH");
                init();
            }
            else {
                console.log("correct input");
                createHTML(paareAnz, spielerAnz);
            }
        }
    }
    // init endet hier
    //***********************************************************************************************    
    // Funktion f�r Website
    function createHTML(_paare, _spieler) {
        let h = document.createElement("header");
        h.className = "nav-def";
        document.body.appendChild(h);
        console.log("load header");
        let hDiv = document.createElement("div");
        hDiv.className = "zentriert";
        h.appendChild(hDiv);
        console.log("load headerDiv");
        let logo = document.createElement("img");
        logo.className = "logo";
        logo.src = "images/unicorn_game.png";
        hDiv.appendChild(logo);
        console.log("load logo");
        playground(_paare, _spieler);
        info(_spieler);
    }
    //***********************************************************************************************
    // Funktion f�r Kartenbereich
    function playground(_paare, _spieler) {
        let spielfeld = document.createElement("div");
        spielfeld.className = "spielfeld center";
        document.body.appendChild(spielfeld);
        console.log("load spielfeld");
        // Array mit Content
        let contentArray = ["images/karten/0.jpg", "images/karten/0.jpg",
            "images/karten/1.jpg", "images/karten/1.jpg",
            "images/karten/2.jpg", "images/karten/2.jpg",
            "images/karten/3.jpg", "images/karten/3.jpg",
            "images/karten/4.jpg", "images/karten/4.jpg",
            "images/karten/5.jpg", "images/karten/5.jpg",
            "images/karten/6.jpg", "images/karten/6.jpg",
            "images/karten/7.jpg", "images/karten/7.jpg"];
        console.log(contentArray);
        // Neues Array aus altem in passender Anzahl (paare*2)
        let selectedContent = contentArray.slice(0, (_paare * 2));
        console.log(selectedContent);
        // Mischen
        selectedContent.sort(function () { return 0.5 - Math.random(); });
        // for-Schleife f�r createCard Funktion
        for (let i = 0; i < selectedContent.length; i++) {
            createCard(selectedContent[i], spielfeld, i);
        }
    }
    //***********************************************************************************************
    //Function createCard
    function createCard(_src, _parent, _index) {
        let card = document.createElement("div");
        card.className = "karte";
        _parent.appendChild(card);
        console.log("load card " + _index);
        let bild = document.createElement("img");
        bild.src = _src;
        card.appendChild(bild);
        console.log("load bild " + _index);
    }
    //***********************************************************************************************
    //Funktion f�r Footer
    function info(_spieler) {
        let spielerInfo = document.createElement("footer");
        document.body.appendChild(spielerInfo);
        console.log("load footer");
        //for schleife (i, i<_spieler, i++)
        //fieldset - box
        //legend - �berschrift
        //innerHTML = "Spieler " + (i+1) + ":"
        //p - contentent = "Score: ??"
    }
})(Memory || (Memory = {})); //namespace ende
//# sourceMappingURL=memory.js.map