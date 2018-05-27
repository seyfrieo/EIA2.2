/*    Aufgabe: (Aufgabe 6)
    Name: (Dominik Seyfried)
    Matrikel: (256734)
    Datum: (27.05.2018)
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.*/

namespace A6 {
    // Struktur des heterogenen assoziativen Arrays als Datensatz für eine studierende Person
    export interface Studi {
        name: string;
        firstname: string;
        matrikel: number;
        studiengang: string;
        age: number;
        gender: boolean;
    }

    // Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
    export interface Studis {
         [matrikel: string]: Studi;
    }

    // Simples Array zum Speichern der Studi-Datensätze (nur zur Demonstration)
    export let studiSimpleArray: Studi[] = [];
    
    // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
    export let studiHomoAssoc: Studis = {};
    
}