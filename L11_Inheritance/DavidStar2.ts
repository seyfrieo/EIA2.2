namespace L11_Inheritance {
    export class DavidStar2 extends DavidStar {

        constructor(_color: string) {
            super(_color);
        }

        move(): void {
            this.x += Math.random() * 2 - 1;
            this.y += Math.random() * 2 - 1;
        }
    }
}