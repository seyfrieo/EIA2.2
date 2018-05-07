var L04_Interfaces;
(function (L04_Interfaces) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        var insertButton = document.getElementById("insert");
        var refreshButton = document.getElementById("refresh");
        var searchButton = document.getElementById("searchbtn");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    function insert(_event) {
        var inputs = document.getElementsByTagName("input");
        var select = document.getElementById("select");
        var genderButton = document.getElementById("male");
        var matrikel = inputs[2].value;
        var studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            studiengang: select.options[select.selectedIndex].value,
            age: parseInt(inputs[3].value),
            gender: genderButton.checked
        };
        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);
        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        L04_Interfaces.studiHomoAssoc[matrikel] = studi;
        // nur um das auch noch zu zeigen...
        L04_Interfaces.studiSimpleArray.push(studi);
    }
    function refresh(_event) {
        var output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (var matrikel in L04_Interfaces.studiHomoAssoc) { // Besonderheit: Type-Annotation nicht erlaubt, ergibt sich aus der Interface-Definition
            var studi = L04_Interfaces.studiHomoAssoc[matrikel];
            var line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";
        }
        // zusätzliche Konsolenausgaben zur Demonstration
        console.group("Simple Array");
        console.log(L04_Interfaces.studiSimpleArray);
        console.groupEnd();
        console.group("Associatives Array (Object)");
        console.log(L04_Interfaces.studiHomoAssoc);
        console.groupEnd();
    }
    function search(_event) {
        var output = document.getElementsByTagName("textarea")[1];
        var studentn = document.getElementById("matrikel");
        output.value = "";
        for (var matrikel in L04_Interfaces.studiHomoAssoc) {
            var studi = L04_Interfaces.studiHomoAssoc[matrikel];
            var outputstring = matrikel + ": ";
            var lengthstudiHomoAssoc = L04_Interfaces.studiSimpleArray.length;
            if (studentn.value == studi.matrikel.toString()) {
                outputstring = studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
                outputstring += studi.gender ? "(M)" : "(F)";
                output.value += outputstring + "\n";
            }
            else if ((lengthstudiHomoAssoc - 1) == 0)
                output.value = "kein Student vorhanden";
        }
    }
})(L04_Interfaces || (L04_Interfaces = {}));
