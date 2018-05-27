/*    Aufgabe: (Aufgabe 6)
    Name: (Dominik Seyfried)
    Matrikel: (256734)
    Datum: (27.05.2018)
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.*/

namespace A6 {
    window.addEventListener("load", init);
    let address: string = "https://seyfrieo.herokuapp.com";

    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");


    function init(): void {
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("searchbtn");
        let massInsertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("massinsert");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
        massInsertButton.addEventListener("click", massInsert);
    }

    function insert(): void {
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let matrikel: string = inputs[2].value;
        let studi: Studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            studiengang: document.getElementsByTagName("select").item(0).value
        };
        let studiString: string = JSON.stringify(studi);

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=insert&data=" + studiString, true);
        xhr.addEventListener("readystatechange", handleStateChangeInsert);
        xhr.send();
    }

    function massInsert(): void {
        let studi1: Studi = {name: "Einstein",
            firstname: "Albert",
            matrikel: 123,
            age: 1,
            gender: true,
            studiengang: "MKB"};

        let studiString1: string = JSON.stringify(studi1);

        let xhr1: XMLHttpRequest = new XMLHttpRequest();
        xhr1.open("GET", address + "?command=insert&data=" + studiString1, true);
        xhr1.addEventListener("readystatechange", handleStateChangeInsert);
        xhr1.send();


        
        let studi2: Studi = {name: "Zweistein",
            firstname: "Albert",
            matrikel: 456,
            age: 2,
            gender: true,
            studiengang: "MKB"};

        let studiString2: string = JSON.stringify(studi2);

        let xhr2: XMLHttpRequest = new XMLHttpRequest();
        xhr2.open("GET", address + "?command=insert&data=" + studiString2, true);
        xhr2.addEventListener("readystatechange", handleStateChangeInsert);
        xhr2.send();



        let studi3: Studi = {name: "Dreistein",
            firstname: "Albert",
            matrikel: 789,
            age: 3,
            gender: true,
            studiengang: "MKB"};

        let studiString3: string = JSON.stringify(studi3);

        let xhr3: XMLHttpRequest = new XMLHttpRequest();
        xhr3.open("GET", address + "?command=insert&data=" + studiString3, true);
        xhr3.addEventListener("readystatechange", handleStateChangeInsert);
        xhr3.send();
    }

    function handleStateChangeInsert(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }


    function refresh(): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=refresh", true);
        xhr.addEventListener("readystatechange", handleStateChangeRefresh);
        xhr.send();
    }

    function handleStateChangeRefresh(_event: ProgressEvent): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }

    function search(): void {
        let matrikel: string = inputs[6].value;

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=search&searchFor=" + matrikel, true);
        xhr.addEventListener("readystatechange", handleStateChangeSearch);
        xhr.send();
    }

    function handleStateChangeSearch(_event: ProgressEvent): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
        output.value = "";
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
}