namespace Memoryspiel {
/*    Aufgabe: (Aufgabe 4)
    Name: (Dominik Seyfried)
    Matrikel: (256734)
    Datum: (06.05.2018)
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.*/
    export let memory: Memory;



    export interface Memory {
        setname: string,
        kartenpaare: number,
        spieler: Player[]
    }

    export interface Player {
        name: string;
        score: number;
    }

    let kartensets = [
        ["Einhorn", 8],
        ["Blobfisch", 7],
        ["Alpaka", 5]
    ];


    document.addEventListener("DOMContentLoaded", main);


    function main(): void {

        createHeader();
        createHTML();


        let playerSelect: HTMLSelectElement = document.getElementById("spieler") as HTMLSelectElement;
        console.log(playerSelect);
        playerSelect.addEventListener("change", function(){
           changePlayernumber(this);

        });

        let form: HTMLFormElement = document.getElementById("form") as HTMLFormElement;
        form.addEventListener("submit", function(evt){
            evt.preventDefault();
            sendInformation();
            init();
            this.style.display = "none";
        });



    }

    function createHTML(): void {
        //Kartensätze section
        let value: string[] = ["Einhorn", "Blobfisch", "Alpaka"];

        for (let i: number = 0; i < kartensets.length; i++) {

            let input = document.createElement('input');
            let label = document.createElement('label');

            input.type = 'radio';
            input.className = 'radio';
            input.name = 'kartensatz';
            input.required = true;
            input.value = kartensets[i][0].toString();

            label.htmlFor = kartensets[i][0].toString();
            label.innerHTML = kartensets[i][0].toString();

            document.getElementById("kartensets").appendChild(input);
            document.getElementById("kartensets").appendChild(label);

            let linebreak: HTMLBRElement = document.createElement('br');
            document.getElementById("kartensets").appendChild(linebreak);

            //add eventlistener
            input.addEventListener("click", function(){
                changeCardset(this);
            });

        }

    }


    function changeCardset(_radio: HTMLInputElement): void {

        let selectEle: HTMLSelectElement = document.getElementById("kartenpaare") as HTMLSelectElement;
        //alle options entfernen
        while (selectEle.firstChild) {
            selectEle.removeChild(selectEle.firstChild);
        }

        for(let i: number = 0; i < kartensets.length; i++) {
            //check welches Kartenset ausgesucht wurde
            if (_radio.value == kartensets[i][0].toString()) {
                //entsprechende kartenpaar-zahl einzügen
                for (let j: number = 1; j <= kartensets[i][1]; j++) {
                    let optEle: HTMLOptionElement = document.createElement('option');
                    optEle.value = j.toString();
                    optEle.innerHTML = j.toString();
                    selectEle.appendChild(optEle);
                }
            }
        }

    }


    function changePlayernumber(_select: HTMLSelectElement): void {
        console.log("blob");

        let parentDiv: HTMLDivElement = document.getElementById("spieler-placeholder") as HTMLDivElement;
        //alle Inputs entfernen
        while(parentDiv.firstChild) {
            parentDiv.removeChild(parentDiv.firstChild);
        }

        let playerNumber: number = parseInt(_select.options[_select.selectedIndex].value);

        for (let i: number = 1; i <= playerNumber; i++) {
            let input: HTMLInputElement = document.createElement('input');
            input.type = 'text';
            input.name = "name";
            input.className = "playername";
            input.required = true;
            input.id = "spieler" + i;

            let label: HTMLLabelElement = document.createElement('label');
            label.htmlFor = "spieler" + i;
            label.innerHTML = "Name " + i;

            parentDiv.appendChild(label);
            parentDiv.appendChild(input);

            let linebreak: HTMLBRElement = document.createElement('br');
            parentDiv.appendChild(linebreak);
        }
    }

    export function sendInformation(): Memory {

        let kartenset: string;
        for (let i: number = 0; i < kartensets.length; i++) {
            let button: HTMLInputElement = document.getElementsByClassName("radio")[i] as HTMLInputElement;
            if (button.checked) {
                kartenset = button.value;
            }
        }

        let sel: HTMLSelectElement = document.getElementById("kartenpaare") as HTMLSelectElement;
        let paare: number = parseInt(sel.options[sel.selectedIndex].value);


        let spielers: Player[] = [];

        let inputs: HTMLCollection = document.getElementsByClassName("playername");
        //convert collection to array
        let array: HTMLInputElement[] = Array.prototype.slice.call(inputs);

        for (let i: number = 0; i < array.length; i++) {
            let spieler: Player = {
                name: array[i].value.toString(),
                score: 0
            };
            spielers.push(spieler);
        }

        console.log("memory saved");
        memory = {
            setname: kartenset,
            kartenpaare: paare,
            spieler: spielers
        };

        return memory;

    }
}