/*
        Aufgabe: (Aufgabe 3)
        Name: (Dominik Seyfried)
        Matrikel: (256734)
        Datum: (22.04.2018)
        Hiermit versichere ich, dass ich diesen
        Code selbst geschrieben habe. Er wurde
        nicht kopiert und auch nicht diktiert.
*/
var memoryspiel;
(function (memoryspiel) {
    var counter = 0;
    var isRunning = false;
    var clickedOnCard = [];
    var paareAnz = 0;
    document.addEventListener("DOMContentLoaded", init);
    //Abfrage Spieleranzahl/Paaranzahl
    function init() {
    }
    // init endet hier
    //***********************************************************************************************    
    // Funktion f�r Website
    function createHTML(_paare, _spieler) {
        var h = document.createElement("header");
        h.className = "nav-def";
        document.body.appendChild(h);
        console.log("load header");
        var hDiv = document.createElement("div");
        hDiv.className = "zentriert";
        h.appendChild(hDiv);
        console.log("load headerDiv");
        var logo = document.createElement("img");
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
        var spielfeld = document.createElement("div");
        spielfeld.className = "spielfeld center";
        document.body.appendChild(spielfeld);
        console.log("load spielfeld");
        // Array mit Content
        var contentArray = ["images/karten/0.jpg", "images/karten/0.jpg",
            "images/karten/1.jpg", "images/karten/1.jpg",
            "images/karten/2.jpg", "images/karten/2.jpg",
            "images/karten/3.jpg", "images/karten/3.jpg",
            "images/karten/4.jpg", "images/karten/4.jpg",
            "images/karten/5.jpg", "images/karten/5.jpg",
            "images/karten/6.jpg", "images/karten/6.jpg",
            "images/karten/7.jpg", "images/karten/7.jpg"];
        console.log(contentArray);
        // Neues Array -> aus altem -> anzahl doppeln, sodal paare gebildet sind
        var selectedContent = contentArray.slice(0, (_paare * 2));
        console.log(selectedContent);
        // Mischen
        selectedContent.sort(function () { return 0.5 - Math.random(); });
        // for-Schleife f�r createCard Funktion
        for (var i = 0; i < selectedContent.length; i++) {
            createCard(selectedContent[i], spielfeld, i);
        }
    }
    //***********************************************************************************************
    //Function createCard
    function createCard(_src, _parent, _index) {
        var card = document.createElement("div");
        card.className = "karte" + " " + _src;
        card.id = _index.toString();
        _parent.appendChild(card);
        console.log("load card " + _index);
        card.addEventListener("click", function () {
            if (isRunning == false)
                showCard(card);
        });
        var bild = document.createElement("img");
        bild.src = _src;
        bild.className = _src;
        card.appendChild(bild);
        console.log("load bild " + _index);
        hideCard(card);
    }
    //***********************************************************************************************
    //Funktion f�r Footer
    function info(_spieler) {
        var footer = document.createElement("footer");
        footer.id = "footer";
        document.body.appendChild(footer);
        console.log("load footer");
        //infobereich muss ich noch machen, folgend der grundlegende Aufbau:
        var spielerInfo = document.createElement("fieldset");
        document.getElementById("footer").appendChild(spielerInfo);
        for (var i = 1; i < (_spieler + 1); i++) {
            var spieler = document.createElement("legend");
            spieler.innerHTML = "Spieler " + i + ": ";
            spielerInfo.appendChild(spieler);
            var score = document.createElement("p");
            score.id = "spieler" + i;
            score.innerHTML = "0";
            spielerInfo.appendChild(score);
        }
        //fieldset - box
        //legend - �berschrift
        //innerHTML = "Spieler " + (i+1) + ":"
        //p - contentent = "Score: ??"
    }
    //***********************************************************************************************
    function showCard(_card) {
        var image = _card.children[0];
        var _src = image.className;
        image.src = _src;
        counter++;
        clickedOnCard.push(_card);
        if (counter == 2) {
            isRunning = true;
            setTimeout(handleCards, 2000);
            counter = 0;
        }
    }
    function hideCard(_card) {
        var image = _card.children[0];
        image.src = "images/hidden.jpg";
    }
    function removeCard(_card) {
        _card.style.visibility = 'hidden';
    }
    //***********************************************************************************************
    function handleCards() {
        console.log(clickedOnCard[1]);
        if (clickedOnCard[0].className == clickedOnCard[1].className) {
            removeCard(clickedOnCard[0]);
            removeCard(clickedOnCard[1]);
            paareAnz--;
            if (paareAnz == 0) {
                gratulations();
            }
        }
        else {
            hideCard(clickedOnCard[0]);
            hideCard(clickedOnCard[1]);
        }
        clickedOnCard.splice(0, 2);
        isRunning = false;
    }
    function gratulations() {
        var grats = document.createElement("div");
        grats.innerHTML = "HAPPY UNICORN!!!!";
        document.body.appendChild(grats);
    }
})(memoryspiel || (memoryspiel = {})); //namespace ende
