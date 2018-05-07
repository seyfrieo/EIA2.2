var Memoryspiel;
(function (Memoryspiel) {
    var kartensets = [
        ["Einhorn", 8],
        ["Blobfisch", 7],
        ["Alpaka", 5]
    ];
    document.addEventListener("DOMContentLoaded", main);
    function main() {
        Memoryspiel.createHeader();
        createHTML();
        var playerSelect = document.getElementById("spieler");
        console.log(playerSelect);
        playerSelect.addEventListener("change", function () {
            changePlayernumber(this);
        });
        var form = document.getElementById("form");
        form.addEventListener("submit", function (evt) {
            evt.preventDefault();
            sendInformation();
            Memoryspiel.init();
            this.style.display = "none";
        });
    }
    function createHTML() {
        //Kartensätze section
        var value = ["Einhorn", "Blobfisch", "Alpaka"];
        for (var i = 0; i < kartensets.length; i++) {
            var input = document.createElement('input');
            var label = document.createElement('label');
            input.type = 'radio';
            input.className = 'radio';
            input.name = 'kartensatz';
            input.required = true;
            input.value = kartensets[i][0].toString();
            label.htmlFor = kartensets[i][0].toString();
            label.innerHTML = kartensets[i][0].toString();
            document.getElementById("kartensets").appendChild(input);
            document.getElementById("kartensets").appendChild(label);
            var linebreak = document.createElement('br');
            document.getElementById("kartensets").appendChild(linebreak);
            //add eventlistener
            input.addEventListener("click", function () {
                changeCardset(this);
            });
        }
    }
    function changeCardset(_radio) {
        var selectEle = document.getElementById("kartenpaare");
        //alle options entfernen
        while (selectEle.firstChild) {
            selectEle.removeChild(selectEle.firstChild);
        }
        for (var i = 0; i < kartensets.length; i++) {
            //check welches Kartenset ausgesucht wurde
            if (_radio.value == kartensets[i][0].toString()) {
                //entsprechende kartenpaar-zahl einzügen
                for (var j = 1; j <= kartensets[i][1]; j++) {
                    var optEle = document.createElement('option');
                    optEle.value = j.toString();
                    optEle.innerHTML = j.toString();
                    selectEle.appendChild(optEle);
                }
            }
        }
    }
    function changePlayernumber(_select) {
        console.log("blob");
        var parentDiv = document.getElementById("spieler-placeholder");
        //alle Inputs entfernen
        while (parentDiv.firstChild) {
            parentDiv.removeChild(parentDiv.firstChild);
        }
        var playerNumber = parseInt(_select.options[_select.selectedIndex].value);
        for (var i = 1; i <= playerNumber; i++) {
            var input = document.createElement('input');
            input.type = 'text';
            input.name = "name";
            input.className = "playername";
            input.required = true;
            input.id = "spieler" + i;
            var label = document.createElement('label');
            label.htmlFor = "spieler" + i;
            label.innerHTML = "Name " + i;
            parentDiv.appendChild(label);
            parentDiv.appendChild(input);
            var linebreak = document.createElement('br');
            parentDiv.appendChild(linebreak);
        }
    }
    function sendInformation() {
        var kartenset;
        for (var i = 0; i < kartensets.length; i++) {
            var button = document.getElementsByClassName("radio")[i];
            if (button.checked) {
                kartenset = button.value;
            }
        }
        var sel = document.getElementById("kartenpaare");
        var paare = parseInt(sel.options[sel.selectedIndex].value);
        var spielers = [];
        var inputs = document.getElementsByClassName("playername");
        //convert collection to array
        var array = Array.prototype.slice.call(inputs);
        for (var i = 0; i < array.length; i++) {
            var spieler = {
                name: array[i].value.toString(),
                score: 0
            };
            spielers.push(spieler);
        }
        console.log("memory saved");
        Memoryspiel.memory = {
            setname: kartenset,
            kartenpaare: paare,
            spieler: spielers
        };
        return Memoryspiel.memory;
    }
    Memoryspiel.sendInformation = sendInformation;
})(Memoryspiel || (Memoryspiel = {}));
//# sourceMappingURL=main.js.map