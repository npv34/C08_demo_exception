export class Student {
    private name: string;
    private group: string;
    private scoreHK1: number;
    private scoreHK2: number;

    constructor(name: string,
                group: string,
                scoreHK1: number,
                scoreHK2: number) {
        this.name = name;
        this.group = group;
        this.scoreHK1 = scoreHK1;
        this.scoreHK2 = scoreHK2;
    }

    getName(): string {
        return this.name;
    }

    getGroup(): string {
        return this.group;
    }

    getScoreHK1(): number {
        return this.scoreHK1;
    }

    getScoreHK2(): number {
        return this.scoreHK2;
    }

    getAvgScore(): number {
        return (this.getScoreHK1() + this.getScoreHK2()) / 2;
    }
}
