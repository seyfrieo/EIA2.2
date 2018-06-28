/*  Aufgabe: (Aufgabe 11)
    Name: (Dominik Seyfried)
    Matrikel: (256734)
    Datum: (28.06.2018)
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.
*/
var aquarium2;
(function (aquarium2) {
    window.addEventListener("load", init);
    var backgroundImage;
    var movingObjects = [];
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        aquarium2.crc2 = canvas.getContext("2d");
        console.log(aquarium2.crc2);
        canvas.addEventListener("click", createFlocken);
        //sachen zeichnen
        drawBackground();
        for (var i = 0; i < 15; i++)
            movingObjects.push(new aquarium2.Bubble());
        //fisch1
        movingObjects.push(new aquarium2.Fisch(300, 200, 1));
        //fisch2
        movingObjects.push(new aquarium2.Fisch(500, 300, 2));
        animate();
    }
    function animate() {
        aquarium2.crc2.clearRect(0, 0, 800, 600);
        aquarium2.crc2.putImageData(backgroundImage, 0, 0);
        //bubbles animieren
        for (var i = 0; i < movingObjects.length; i++)
            movingObjects[i].update();
        window.setTimeout(animate, 20);
    }
    function createFlocken(_e) {
        var x = _e.clientX;
        var y = _e.clientY;
        for (var i = 0; i < 5; i++) {
            movingObjects.push(new aquarium2.Flocke(x, y));
        }
    }
    function drawBackground() {
        aquarium2.crc2.fillStyle = "#85ade6";
        aquarium2.crc2.fillRect(0, 0, 800, 600);
        var grd = aquarium2.crc2.createLinearGradient(0, 600, 0, 100);
        grd.addColorStop(0, "#ADD8E6");
        grd.addColorStop(1, "#d3e9f9");
        aquarium2.crc2.fillStyle = grd;
        aquarium2.crc2.fillRect(0, 0, 800, 600);
        drawGround();
        drawCastle();
        for (var i = 0; i < 5; i++)
            drawGrass(Math.random() * 600);
        //hintergrund-bild wird gespeichert
        backgroundImage = aquarium2.crc2.getImageData(0, 0, 800, 600);
    }
    //Ground
    function drawGround() {
        aquarium2.crc2.beginPath();
        aquarium2.crc2.moveTo(0, 530);
        aquarium2.crc2.lineTo(800, 530);
        aquarium2.crc2.lineTo(800, 600);
        aquarium2.crc2.lineTo(0, 600);
        aquarium2.crc2.closePath();
        aquarium2.crc2.fillStyle = "#c2b280";
        aquarium2.crc2.fill();
    }
    //Castle center
    function drawCastle() {
        aquarium2.crc2.beginPath();
        aquarium2.crc2.moveTo(470, 450);
        aquarium2.crc2.lineTo(600, 450);
        aquarium2.crc2.lineTo(600, 530);
        aquarium2.crc2.lineTo(470, 530);
        aquarium2.crc2.closePath();
        aquarium2.crc2.fillStyle = "#A9A9A9";
        aquarium2.crc2.fill();
        aquarium2.crc2.beginPath();
        aquarium2.crc2.moveTo(500, 470);
        aquarium2.crc2.lineTo(570, 470);
        aquarium2.crc2.lineTo(570, 530);
        aquarium2.crc2.lineTo(500, 530);
        aquarium2.crc2.closePath();
        aquarium2.crc2.fillStyle = "#ADD8E6";
        aquarium2.crc2.fill();
        //Castle left tower
        aquarium2.crc2.beginPath();
        aquarium2.crc2.moveTo(400, 380);
        aquarium2.crc2.lineTo(420, 380);
        aquarium2.crc2.lineTo(420, 400);
        aquarium2.crc2.lineTo(400, 400);
        aquarium2.crc2.closePath();
        aquarium2.crc2.fillStyle = "#A9A9A9";
        aquarium2.crc2.fill();
        aquarium2.crc2.beginPath();
        aquarium2.crc2.moveTo(450, 380);
        aquarium2.crc2.lineTo(470, 380);
        aquarium2.crc2.lineTo(470, 530);
        aquarium2.crc2.lineTo(450, 400);
        aquarium2.crc2.closePath();
        aquarium2.crc2.fillStyle = "#A9A9A9";
        aquarium2.crc2.fill();
        aquarium2.crc2.beginPath();
        aquarium2.crc2.moveTo(400, 400);
        aquarium2.crc2.lineTo(400, 530);
        aquarium2.crc2.lineTo(470, 530);
        aquarium2.crc2.lineTo(470, 400);
        aquarium2.crc2.closePath();
        aquarium2.crc2.fillStyle = "#A9A9A9";
        aquarium2.crc2.fill();
        //Castle right tower
        aquarium2.crc2.beginPath();
        aquarium2.crc2.moveTo(600, 380);
        aquarium2.crc2.lineTo(620, 380);
        aquarium2.crc2.lineTo(620, 400);
        aquarium2.crc2.lineTo(600, 400);
        aquarium2.crc2.closePath();
        aquarium2.crc2.fillStyle = "#A9A9A9";
        aquarium2.crc2.fill();
        aquarium2.crc2.beginPath();
        aquarium2.crc2.moveTo(650, 380);
        aquarium2.crc2.lineTo(670, 380);
        aquarium2.crc2.lineTo(670, 530);
        aquarium2.crc2.lineTo(650, 400);
        aquarium2.crc2.closePath();
        aquarium2.crc2.fillStyle = "#A9A9A9";
        aquarium2.crc2.fill();
        aquarium2.crc2.beginPath();
        aquarium2.crc2.moveTo(600, 400);
        aquarium2.crc2.lineTo(600, 530);
        aquarium2.crc2.lineTo(670, 530);
        aquarium2.crc2.lineTo(670, 400);
        aquarium2.crc2.closePath();
        aquarium2.crc2.fillStyle = "#A9A9A9";
        aquarium2.crc2.fill();
    }
    function drawGrass(_x) {
        aquarium2.crc2.strokeStyle = "green";
        aquarium2.crc2.lineWidth = 4;
        aquarium2.crc2.beginPath();
        aquarium2.crc2.moveTo(_x, 530);
        aquarium2.crc2.bezierCurveTo(_x, 530, _x + 10, 500, _x, 480);
        aquarium2.crc2.bezierCurveTo(_x, 480, _x - 10, 450, _x, 430);
        aquarium2.crc2.stroke();
    }
})(aquarium2 || (aquarium2 = {}));
//# sourceMappingURL=aquarium.js.map