/*  Aufgabe: (Aufgabe 11)
    Name: (Dominik Seyfried)
    Matrikel: (256734)
    Datum: (28.06.2018)
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.
*/
namespace aquarium2 {

    export interface IntFisch {
        x: number;
        y: number;
        dx: number;
        dy: number;
        fischart: number;
    }
    export class Fisch extends MovingObject implements IntFisch {
        dx: number;
        dy: number;
        fischart: number;

        constructor(_x: number, _y: number, _fischart: number) {
            super(_x, _y);
            this.dx = Math.random() * -1 - 0.5;
            this.dy = Math.random() * -0.2;
            this.fischart = _fischart;
        }

        draw(): void {
            if (this.fischart == 1) {
                crc2.strokeStyle = "black";
                crc2.beginPath();
                crc2.moveTo(this.x + 80, this.y + 270);
                crc2.lineTo(this.x + 140, this.y + 280);
                crc2.lineTo(this.x + 140, this.y + 320);
                crc2.closePath();
                crc2.stroke();
                crc2.fillStyle = "purple";
                crc2.fill();

                crc2.beginPath();
                crc2.moveTo(this.x + 170, this.y + 300);
                crc2.lineTo(this.x + 300, this.y + 250);
                crc2.lineTo(this.x + 300, this.y + 350);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
                crc2.fillStyle = 'pink';

                // Startpunkt Ellipse
                crc2.moveTo(this.x + 100, this.y + 300);

                // Obere Haelfte
                crc2.bezierCurveTo(this.x + 100, this.y + 250, this.x + 240, this.y + 250, this.x + 240, this.y + 300);

                // Untere Haelfte
                crc2.bezierCurveTo(this.x + 240, this.y + 350, this.x + 100, this.y + 350, this.x + 100, this.y + 300);
                crc2.stroke();
                crc2.fill();

                crc2.beginPath();
                crc2.arc(this.x + 125, this.y + 294, 10, 0, 2 * Math.PI);
                crc2.fillStyle = "white";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(this.x + 123, this.y + 295, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "black";
                crc2.fill();

                crc2.beginPath();
                crc2.moveTo(this.x + 105, this.y + 315);
                crc2.lineTo(this.x + 115, this.y + 314);
                crc2.closePath();
                crc2.stroke();
            }

            if (this.fischart == 2) {
                crc2.strokeStyle = "black";
                crc2.beginPath();
                crc2.moveTo(this.x + 370, this.y + 100);
                crc2.lineTo(this.x + 550, this.y + 50);
                crc2.lineTo(this.x + 550, this.y + 150);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
                crc2.fillStyle = 'purple';

                // Startpunkt Ellipse
                crc2.moveTo(this.x + 300, this.y + 100);

                // Obere Haelfte
                crc2.bezierCurveTo(this.x + 300, this.y + 50, this.x + 540, this.y + 50, this.x + 540, this.y + 100);

                // Untere Haelfte
                crc2.bezierCurveTo(this.x + 540, this.y + 150, this.x + 300, this.y + 150, this.x + 300, this.y + 100);
                crc2.stroke();
                crc2.fill();

                crc2.beginPath();
                crc2.arc(this.x + 325, this.y + 94, 10, 0, 2 * Math.PI);
                crc2.fillStyle = "white";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(this.x + 323, this.y + 95, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "black";
                crc2.fill();

                crc2.beginPath();
                crc2.moveTo(this.x + 310, this.y + 115);
                crc2.lineTo(this.x + 320, this.y + 114);
                crc2.closePath();
                crc2.stroke();
            }
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;

            //invertiertiert geschwindigkeit, falls fisch bildrand trifft
            if (this.x < -300)
                this.x = 500;
            if (this.y > 300 || this.y < 0)
                this.dy = this.dy - (this.dy * 2);
        }

        update(): void {
            this.draw();
            this.move();
        }

    }
}