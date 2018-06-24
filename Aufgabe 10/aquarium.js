/*  Aufgabe: (Aufgabe 10)
    Name: (Dominik Seyfried)
    Matrikel: (256734)
    Datum: (24.06.2018)
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.
*/
var aquarium;
(function (aquarium) {
    window.addEventListener("load", init);
    var backgroundImage;
    var bubbles = [];
    var fische = [];
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        aquarium.crc2 = canvas.getContext("2d");
        console.log(aquarium.crc2);
        //sachen zeichnen
        drawBackground();
        for (var i = 0; i < 15; i++)
            bubbles.push(new aquarium.Bubble());
        //fisch1
        fische.push(new aquarium.Fisch(300, 200, 1));
        //fisch2
        fische.push(new aquarium.Fisch(500, 300, 2));
        animate();
    }
    function animate() {
        aquarium.crc2.clearRect(0, 0, 800, 600);
        aquarium.crc2.putImageData(backgroundImage, 0, 0);
        //bubbles animieren
        for (var i = 0; i < bubbles.length; i++)
            bubbles[i].update();
        //fische animieren
        for (var i = 0; i < fische.length; i++)
            fische[i].update();
        window.setTimeout(animate, 20);
    }
    function drawBackground() {
        aquarium.crc2.fillStyle = "#85ade6";
        aquarium.crc2.fillRect(0, 0, 800, 600);
        var grd = aquarium.crc2.createLinearGradient(0, 600, 0, 100);
        grd.addColorStop(0, "#ADD8E6");
        grd.addColorStop(1, "#d3e9f9");
        aquarium.crc2.fillStyle = grd;
        aquarium.crc2.fillRect(0, 0, 800, 600);
        drawGround();
        drawCastle();
        for (var i = 0; i < 5; i++)
            drawGrass(Math.random() * 600);
        //hintergrund-bild wird gespeichert
        backgroundImage = aquarium.crc2.getImageData(0, 0, 800, 600);
    }
    //Ground
    function drawGround() {
        aquarium.crc2.beginPath();
        aquarium.crc2.moveTo(0, 530);
        aquarium.crc2.lineTo(800, 530);
        aquarium.crc2.lineTo(800, 600);
        aquarium.crc2.lineTo(0, 600);
        aquarium.crc2.closePath();
        aquarium.crc2.fillStyle = "#c2b280";
        aquarium.crc2.fill();
    }
    //Castle center
    function drawCastle() {
        aquarium.crc2.beginPath();
        aquarium.crc2.moveTo(470, 450);
        aquarium.crc2.lineTo(600, 450);
        aquarium.crc2.lineTo(600, 530);
        aquarium.crc2.lineTo(470, 530);
        aquarium.crc2.closePath();
        aquarium.crc2.fillStyle = "#A9A9A9";
        aquarium.crc2.fill();
        aquarium.crc2.beginPath();
        aquarium.crc2.moveTo(500, 470);
        aquarium.crc2.lineTo(570, 470);
        aquarium.crc2.lineTo(570, 530);
        aquarium.crc2.lineTo(500, 530);
        aquarium.crc2.closePath();
        aquarium.crc2.fillStyle = "#ADD8E6";
        aquarium.crc2.fill();
        //Castle left tower
        aquarium.crc2.beginPath();
        aquarium.crc2.moveTo(400, 380);
        aquarium.crc2.lineTo(420, 380);
        aquarium.crc2.lineTo(420, 400);
        aquarium.crc2.lineTo(400, 400);
        aquarium.crc2.closePath();
        aquarium.crc2.fillStyle = "#A9A9A9";
        aquarium.crc2.fill();
        aquarium.crc2.beginPath();
        aquarium.crc2.moveTo(450, 380);
        aquarium.crc2.lineTo(470, 380);
        aquarium.crc2.lineTo(470, 530);
        aquarium.crc2.lineTo(450, 400);
        aquarium.crc2.closePath();
        aquarium.crc2.fillStyle = "#A9A9A9";
        aquarium.crc2.fill();
        aquarium.crc2.beginPath();
        aquarium.crc2.moveTo(400, 400);
        aquarium.crc2.lineTo(400, 530);
        aquarium.crc2.lineTo(470, 530);
        aquarium.crc2.lineTo(470, 400);
        aquarium.crc2.closePath();
        aquarium.crc2.fillStyle = "#A9A9A9";
        aquarium.crc2.fill();
        //Castle right tower
        aquarium.crc2.beginPath();
        aquarium.crc2.moveTo(600, 380);
        aquarium.crc2.lineTo(620, 380);
        aquarium.crc2.lineTo(620, 400);
        aquarium.crc2.lineTo(600, 400);
        aquarium.crc2.closePath();
        aquarium.crc2.fillStyle = "#A9A9A9";
        aquarium.crc2.fill();
        aquarium.crc2.beginPath();
        aquarium.crc2.moveTo(650, 380);
        aquarium.crc2.lineTo(670, 380);
        aquarium.crc2.lineTo(670, 530);
        aquarium.crc2.lineTo(650, 400);
        aquarium.crc2.closePath();
        aquarium.crc2.fillStyle = "#A9A9A9";
        aquarium.crc2.fill();
        aquarium.crc2.beginPath();
        aquarium.crc2.moveTo(600, 400);
        aquarium.crc2.lineTo(600, 530);
        aquarium.crc2.lineTo(670, 530);
        aquarium.crc2.lineTo(670, 400);
        aquarium.crc2.closePath();
        aquarium.crc2.fillStyle = "#A9A9A9";
        aquarium.crc2.fill();
    }
    function drawGrass(_x) {
        aquarium.crc2.strokeStyle = "green";
        aquarium.crc2.lineWidth = 4;
        aquarium.crc2.beginPath();
        aquarium.crc2.moveTo(_x, 530);
        aquarium.crc2.bezierCurveTo(_x, 530, _x + 10, 500, _x, 480);
        aquarium.crc2.bezierCurveTo(_x, 480, _x - 10, 450, _x, 430);
        aquarium.crc2.stroke();
    }
})(aquarium || (aquarium = {}));
//# sourceMappingURL=aquarium.js.map