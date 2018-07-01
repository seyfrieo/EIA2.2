var L11_Inheritance;
(function (L11_Inheritance) {
    window.addEventListener("load", init);
    var stars = [];
    var n = 100;
    //let rects: Rect[] = [];
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        L11_Inheritance.crc2 = canvas.getContext("2d");
        console.log(L11_Inheritance.crc2);
        canvas.addEventListener("click", insertNewObject);
        for (var i = 0; i < n; i++) {
            var star = new L11_Inheritance.DavidStar("#00ffff");
            stars.push(star);
            var rect = new L11_Inheritance.Rect("#ff0000");
            stars.push(rect);
            var star2 = new L11_Inheritance.DavidStar2("#00ffff");
            stars.push(star2);
        }
        animate();
    }
    function insertNewObject(_event) {
        var x = _event.clientX;
        var y = _event.clientY;
        var n = Math.random() * 2;
        n = Math.round(n);
        var star;
        if (n == 0)
            star = new L11_Inheritance.DavidStar("#ffff00");
        if (n == 1)
            star = new L11_Inheritance.Rect("#ffff00");
        if (n == 2)
            star = new L11_Inheritance.DavidStar2("#ffff00");
        star.x = x;
        star.y = y;
        stars.push(star);
    }
    function animate() {
        window.setTimeout(animate, 10);
        L11_Inheritance.crc2.clearRect(0, 0, L11_Inheritance.crc2.canvas.width, L11_Inheritance.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (var i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (var i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(L11_Inheritance || (L11_Inheritance = {}));
