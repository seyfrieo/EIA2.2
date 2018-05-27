/*    Aufgabe: (Aufgabe 6)
    Name: (Dominik Seyfried)
    Matrikel: (256734)
    Datum: (27.05.2018)
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.*/
var A6;
(function (A6) {
    window.addEventListener("load", init);
    var address = "https://seyfrieo.herokuapp.com";
    var inputs = document.getElementsByTagName("input");
    function init() {
        var insertButton = document.getElementById("insert");
        var refreshButton = document.getElementById("refresh");
        var searchButton = document.getElementById("searchbtn");
        var massInsertButton = document.getElementById("massinsert");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
        massInsertButton.addEventListener("click", massInsert);
    }
    function insert() {
        var genderButton = document.getElementById("male");
        var matrikel = inputs[2].value;
        var studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            studiengang: document.getElementsByTagName("select").item(0).value
        };
        var studiString = JSON.stringify(studi);
        var xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=insert&data=" + studiString, true);
        xhr.addEventListener("readystatechange", handleStateChangeInsert);
        xhr.send();
    }
    function massInsert() {
        var studi1 = { name: "Einstein",
            firstname: "Albert",
            matrikel: 123,
            age: 1,
            gender: true,
            studiengang: "MKB" };
        var studiString1 = JSON.stringify(studi1);
        var xhr1 = new XMLHttpRequest();
        xhr1.open("GET", address + "?command=insert&data=" + studiString1, true);
        xhr1.addEventListener("readystatechange", handleStateChangeInsert);
        xhr1.send();
        var studi2 = { name: "Zweistein",
            firstname: "Albert",
            matrikel: 456,
            age: 2,
            gender: true,
            studiengang: "MKB" };
        var studiString2 = JSON.stringify(studi2);
        var xhr2 = new XMLHttpRequest();
        xhr2.open("GET", address + "?command=insert&data=" + studiString2, true);
        xhr2.addEventListener("readystatechange", handleStateChangeInsert);
        xhr2.send();
        var studi3 = { name: "Dreistein",
            firstname: "Albert",
            matrikel: 789,
            age: 3,
            gender: true,
            studiengang: "MKB" };
        var studiString3 = JSON.stringify(studi3);
        var xhr3 = new XMLHttpRequest();
        xhr3.open("GET", address + "?command=insert&data=" + studiString3, true);
        xhr3.addEventListener("readystatechange", handleStateChangeInsert);
        xhr3.send();
    }
    function handleStateChangeInsert(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function refresh() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=refresh", true);
        xhr.addEventListener("readystatechange", handleStateChangeRefresh);
        xhr.send();
    }
    function handleStateChangeRefresh(_event) {
        var output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
    function search() {
        var matrikel = inputs[6].value;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=search&searchFor=" + matrikel, true);
        xhr.addEventListener("readystatechange", handleStateChangeSearch);
        xhr.send();
    }
    function handleStateChangeSearch(_event) {
        var output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
})(A6 || (A6 = {}));
//# sourceMappingURL=ProcessForm.js.map