/*  Aufgabe: (Aufgabe 10)
    Name: (Dominik Seyfried)
    Matrikel: (256734)
    Datum: (24.06.2018)
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.
*/
namespace aquarium {
    export interface IntBubble {
        x: number;
        y: number;
        dy: number;
        rad: number;
    }
    export class Bubble implements IntBubble {

        x: number;
        y: number;
        dy: number;
        rad: number;

        constructor() {
            this.x = Math.random() * 350 + 300;
            this.y = Math.random() * 500;
            this.dy = Math.random() * 2 + 1;
            this.rad = Math.random() * 30 + 2;
        }


        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
            crc2.fillStyle = "rgba(0, 0, 200, 0.5)";
            crc2.fill();
        }

        move(): void {
            this.y -= this.dy;
            if (this.y < 0)
                this.y = 530;
        }

        update(): void {
            this.draw();
            this.move();
        }

    }
}