/*  Aufgabe: (Aufgabe 10)
    Name: (Dominik Seyfried)
    Matrikel: (256734)
    Datum: (24.06.2018)
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.
*/
namespace aquarium {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let backgroundImage: ImageData;
    let bubbles: Bubble[] = [];
    let fische: Fisch[] = [];

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //sachen zeichnen
        drawBackground();

        for (let i: number = 0; i < 15; i++)
            bubbles.push(new Bubble());

        //fisch1
        fische.push(new Fisch(300, 200, 1));
        //fisch2
        fische.push(new Fisch(500, 300, 2));

        animate();
    }

    function animate(): void {
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(backgroundImage, 0, 0);

        //bubbles animieren
        for (let i: number = 0; i < bubbles.length; i++)
            bubbles[i].update();

        //fische animieren
        for (let i: number = 0; i < fische.length; i++)
            fische[i].update();

        window.setTimeout(animate, 20);
    }


    function drawBackground(): void {
        crc2.fillStyle = "#85ade6";
        crc2.fillRect(0, 0, 800, 600);
        let grd=crc2.createLinearGradient(0,600,0,100);
        grd.addColorStop(0,"#ADD8E6");
        grd.addColorStop(1,"#d3e9f9");
        crc2.fillStyle=grd;
        crc2.fillRect(0,0,800,600);

        drawGround();
        drawCastle();
        for (let i: number = 0; i < 5; i++)
            drawGrass(Math.random() * 600);

        //hintergrund-bild wird gespeichert
        backgroundImage = crc2.getImageData(0, 0, 800, 600);
    }




    //Ground
    function drawGround(): void {
        crc2.beginPath();
        crc2.moveTo(0, 530);
        crc2.lineTo(800, 530);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.fillStyle = "#c2b280";
        crc2.fill();
    }
    //Castle center

    function drawCastle(): void {
        crc2.beginPath();
        crc2.moveTo(470, 450);
        crc2.lineTo(600, 450);
        crc2.lineTo(600, 530);
        crc2.lineTo(470, 530);
        crc2.closePath();
        crc2.fillStyle = "#A9A9A9";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(500, 470);
        crc2.lineTo(570, 470);
        crc2.lineTo(570, 530);
        crc2.lineTo(500, 530);
        crc2.closePath();
        crc2.fillStyle = "#ADD8E6";
        crc2.fill();

        //Castle left tower

        crc2.beginPath();
        crc2.moveTo(400, 380);
        crc2.lineTo(420, 380);
        crc2.lineTo(420, 400);
        crc2.lineTo(400, 400);
        crc2.closePath();
        crc2.fillStyle = "#A9A9A9";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(450, 380);
        crc2.lineTo(470, 380);
        crc2.lineTo(470, 530);
        crc2.lineTo(450, 400);
        crc2.closePath();
        crc2.fillStyle = "#A9A9A9";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(400, 400);
        crc2.lineTo(400, 530);
        crc2.lineTo(470, 530);
        crc2.lineTo(470, 400);
        crc2.closePath();
        crc2.fillStyle = "#A9A9A9";
        crc2.fill();


        //Castle right tower

        crc2.beginPath();
        crc2.moveTo(600, 380);
        crc2.lineTo(620, 380);
        crc2.lineTo(620, 400);
        crc2.lineTo(600, 400);
        crc2.closePath();
        crc2.fillStyle = "#A9A9A9";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(650, 380);
        crc2.lineTo(670, 380);
        crc2.lineTo(670, 530);
        crc2.lineTo(650, 400);
        crc2.closePath();
        crc2.fillStyle = "#A9A9A9";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(600, 400);
        crc2.lineTo(600, 530);
        crc2.lineTo(670, 530);
        crc2.lineTo(670, 400);
        crc2.closePath();
        crc2.fillStyle = "#A9A9A9";
        crc2.fill();
    }

    function drawGrass(_x: number): void {
        crc2.strokeStyle = "green";
        crc2.lineWidth = 4;
        crc2.beginPath();
        crc2.moveTo(_x, 530);
        crc2.bezierCurveTo(_x, 530, _x + 10 , 500, _x, 480);
        crc2.bezierCurveTo(_x, 480, _x - 10, 450, _x, 430);
        crc2.stroke();
    }
}