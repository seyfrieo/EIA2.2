/*
        Aufgabe: (Aufgabe 3)
        Name: (Dominik Seyfried)
        Matrikel: (256734)
        Datum: (22.04.2018)
        Hiermit versichere ich, dass ich diesen
        Code selbst geschrieben habe. Er wurde
        nicht kopiert und auch nicht diktiert.
*/

namespace Memoryspiel {

   let counter: number = 0;
   let isRunning: boolean = false;
   let clickedOnCard: HTMLDivElement[] = [];
    
    //Abfrage Spieleranzahl/Paaranzahl
    export function init(): void {
        playground(memory);
        info(memory);
    }
    // init endet hier

    //***********************************************************************************************    
    
    // Funktion f�r Website
    export function createHeader (): void {
        
        let h: HTMLElement = document.createElement("header");
            h.className= "nav-def";
            document.getElementsByTagName('header')[0].appendChild(h);
            console.log("load header");
        
        let hDiv: HTMLDivElement = document.createElement("div");
            hDiv.className="zentriert";
            h.appendChild(hDiv);
            console.log("load headerDiv");
        
        let logo: HTMLImageElement = document.createElement("img");
            logo.className="logo";
            logo.src="images/unicorn_game.png";
            hDiv.appendChild(logo);
            console.log("load logo");

        }
    
    //***********************************************************************************************
    
    // Funktion f�r Kartenbereich
    function playground (_memory: Memory):void {
        
        let spielfeld: HTMLDivElement = document.createElement("div");
            spielfeld.className="spielfeld center";
            document.body.appendChild(spielfeld);
            console.log("load spielfeld");
        
        // Array mit Content
        let contentArray: string[] = [];

        for (let i: number = 0; i < _memory.kartenpaare; i++) {
            contentArray.push("images/Karten/" + _memory.setname + "/" + i + ".jpg", "images/Karten/" + _memory.setname + "/" + i + ".jpg");
        }
        console.log(contentArray);
        // Neues Array -> aus altem -> anzahl doppeln, sodal paare gebildet sind
         let selectedContent: string[] = contentArray.slice(0, (_memory.kartenpaare*2));
         console.log(selectedContent);    
        
        // Mischen
        selectedContent.sort(function(){return 0.5 - Math.random()});
        
        // for-Schleife f�r createCard Funktion
        for (let i: number = 0; i < selectedContent.length; i++){
            createCard(selectedContent[i], spielfeld, i);
            }
            
    }
    
    //***********************************************************************************************
    
    //Function createCard
        function createCard(_src: string, _parent: HTMLDivElement, _index: number): void {
            
            let card: HTMLDivElement = document.createElement("div");
            card.className="karte" + " " + _src;
            card.id = _index.toString();
            _parent.appendChild(card);
            console.log("load card " + _index);

            card.addEventListener("click", function(){
                if (isRunning == false)
                showCard(card);
            });
            
            let bild: HTMLImageElement = document.createElement("img");
            bild.src= _src;
            bild.className = _src;

            card.appendChild(bild);
            console.log("load bild " + _index);


            hideCard(card);
            
            }

    //***********************************************************************************************
    
    //Funktion f�r Footer
    function info(_memory: Memory): void {
        
        let footer: HTMLElement = document.createElement("footer");
        footer.id = "footer";
            document.body.appendChild(footer);
            console.log("load footer");
        
        //infobereich muss ich noch machen, folgend der grundlegende Aufbau:
        let spielerInfo: HTMLElement = document.createElement("fieldset");
        document.getElementById("footer").appendChild(spielerInfo);

        for (let i: number = 0; i < _memory.spieler.length; i++) {
            let spieler: HTMLElement = document.createElement("legend");
            spieler.innerHTML = _memory.spieler[i].name + ": ";
            spielerInfo.appendChild(spieler);

            let score: HTMLElement = document.createElement("p");
            score.id = "spieler" + i;
            score.innerHTML = _memory.spieler[i].score.toString();
            spielerInfo.appendChild(score);

        }


            //fieldset - box
        
            //legend - �berschrift
            //innerHTML = "Spieler " + (i+1) + ":"
        
            //p - contentent = "Score: ??"
             
        
        }
    
    //***********************************************************************************************

    function showCard(_card: HTMLDivElement): void {
        let image: HTMLImageElement = _card.children[0] as HTMLImageElement;
        let _src: string = image.className;
        image.src = _src;
        if (clickedOnCard[0] != _card) {
            counter++;
            clickedOnCard.push(_card);
        }
        if (counter == 2){
            isRunning = true;
            setTimeout(handleCards, 2000);
            counter = 0;
        }

    }

    function hideCard(_card: HTMLDivElement): void {
        let image: HTMLImageElement = _card.children[0] as HTMLImageElement;
        image.src = "images/hidden.jpg";
    }

    function removeCard(_card: HTMLDivElement): void {
        _card.style.visibility = 'hidden';
    }

    //***********************************************************************************************

    function handleCards(): void {

        console.log(clickedOnCard[1]);
        if (clickedOnCard[0].className == clickedOnCard[1].className) {
            removeCard(clickedOnCard[0]);
            removeCard(clickedOnCard[1]);
            memory.kartenpaare--;
            if (memory.kartenpaare == 0) {
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

    function gratulations(): void {
        let grats: HTMLDivElement = document.createElement("div");
        grats.id = "grats";
        grats.innerHTML = "HAPPY UNICORN!!!!";
        document.body.appendChild(grats);
    }

}//namespace ende