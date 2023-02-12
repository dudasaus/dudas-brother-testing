export class GoodMath {
    constructor(
        private readonly number1: number, private readonly number2: number) {}

    add(): number {
        return this.number1 + this.number2;
    }

    subtract(): number {
        return this.number1 - this.number2;
    }
}
