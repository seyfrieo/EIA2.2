namespace L11_Inheritance {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let stars: DavidStar[] = [];
    let n: number = 100;

    //let rects: Rect[] = [];

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        canvas.addEventListener("click", insertNewObject);

        for (let i: number = 0; i < n; i++) {
            let star: DavidStar = new DavidStar("#00ffff");
            stars.push(star);

            let rect: Rect = new Rect("#ff0000");
            stars.push(rect);

            let star2: DavidStar2 = new DavidStar2("#00ffff");
            stars.push(star2);
        }


        animate();
    }

    function insertNewObject(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;

        let n: number = Math.random() * 2;
        n = Math.round(n);

        let star: DavidStar;
        if (n == 0)
            star = new DavidStar("#ffff00");
        if (n == 1)
            star = new Rect("#ffff00");
        if (n == 2)
            star = new DavidStar2("#ffff00");

        star.x = x;
        star.y = y;
        stars.push(star);
    }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
}