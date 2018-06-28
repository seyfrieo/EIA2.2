/*  Aufgabe: (Aufgabe 11)
    Name: (Dominik Seyfried)
    Matrikel: (256734)
    Datum: (28.06.2018)
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.
*/
namespace aquarium2 {
    export class MovingObject {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            //abstract
        }

        move(): void {
            //abstract
        }

        update(): void {
            //abstract
        }

    }
}