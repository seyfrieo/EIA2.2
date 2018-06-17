/*  Aufgabe: (Aufgabe 9)
    Name: (Dominik Seyfried)
    Matrikel: (256734)
    Datum: (16.06.2018)
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.*/

window.addEventListener("load", init);

function init(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2);

    // Background
    crc2.fillStyle = "#85ade6";
    crc2.fillRect(0, 0, 800, 600);
    let grd=crc2.createLinearGradient(0,600,0,100);
    grd.addColorStop(0,"#ADD8E6");
    grd.addColorStop(1,"#d3e9f9");
    crc2.fillStyle=grd;
    crc2.fillRect(0,0,800,600);


    drawGround();
    drawCastle();
    drawFish1();
    drawFish2();
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
    //Stones

    //Bubbles

    for (let i: number = 0; i < 15; i++)
        drawBubble(Math.random() * 350 + 350, Math.random() * 500, Math.random() * 30 + 2);

    //grass
    for (let i: number = 0; i < 5; i++)
        drawGrass(Math.random() * 600);

    //Fish 1
function drawFish1(): void {
    crc2.beginPath();
    crc2.moveTo(80, 270);
    crc2.lineTo(140, 280);
    crc2.lineTo(140, 320);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "purple";
    crc2.fill();

    crc2.beginPath();
    crc2.moveTo(170, 300);
    crc2.lineTo(300, 250);
    crc2.lineTo(300, 350);
    crc2.closePath();
    crc2.stroke();
    crc2.fill();
    crc2.fillStyle = 'pink';

    // Startpunkt Ellipse
    crc2.moveTo(100, 300);

    // Obere Haelfte
    crc2.bezierCurveTo(100, 250, 240, 250, 240, 300);

    // Untere Haelfte
    crc2.bezierCurveTo(240, 350, 100, 350, 100, 300);
    crc2.stroke();
    crc2.fill();

    crc2.beginPath();
    crc2.arc(125, 294, 10, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();

    crc2.beginPath();
    crc2.arc(123, 295, 5, 0, 2 * Math.PI);
    crc2.fillStyle = "black";
    crc2.fill();

    crc2.beginPath();
    crc2.moveTo(105, 315);
    crc2.lineTo(115, 314);
    crc2.closePath();
    crc2.stroke();
}
    //Fish 2

    function drawFish2(): void {
        crc2.beginPath();
        crc2.moveTo(370, 100);
        crc2.lineTo(550, 50);
        crc2.lineTo(550, 150);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.fillStyle = 'purple';

        // Startpunkt Ellipse
        crc2.moveTo(300, 100);

        // Obere Haelfte
        crc2.bezierCurveTo(300, 50, 540, 50, 540, 100);

        // Untere Haelfte
        crc2.bezierCurveTo(540, 150, 300, 150, 300, 100);
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.arc(325, 94, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(323, 95, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(310, 115);
        crc2.lineTo(320, 114);
        crc2.closePath();
        crc2.stroke();
    }
    function drawBubble(_x: number, _y: number, _rad: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, _rad, 0, 2 * Math.PI);
        crc2.fillStyle = "rgba(0, 0, 200, 0.5)";
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

