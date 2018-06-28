/*  Aufgabe: (Aufgabe 11)
    Name: (Dominik Seyfried)
    Matrikel: (256734)
    Datum: (28.06.2018)
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.
*/
namespace aquarium2 {
    interface IntFlocke {
        x: number;
        y: number;
    }
    export class Flocke extends MovingObject implements IntFlocke {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();
        }

        move(): void {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 + 2;
        }

        update(): void {
            this.draw();
            if (this.y < 530)
                this.move();
        }

    }
}