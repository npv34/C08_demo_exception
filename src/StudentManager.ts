import {Student} from "./Student";

export class StudentManager {
    static students: Student[] = [];
    static limitStudent: number = 5;

    constructor() {
    }

    static add(student: Student): void {
        if (this.getTotalStudent() < this.limitStudent) {
            this.students.push(student);
        } else {
            throw new Error("Class full student")
        }
    }

    static showList(): void {
        console.table(this.students);
    }

    static getTotalStudent(): number {
        return this.students.length;
    }

    static showRank() {
        for (let i = 0; i < this.getTotalStudent(); i++) {
            for (let j = i + 1; j < this.getTotalStudent(); j++) {
                if (this.students[i].getAvgScore() < this.students[j].getAvgScore()) {
                    let temp = this.students[i];
                    this.students[i] = this.students[j];
                    this.students[j] = temp;
                }
            }
        }
        console.log(this.students)
    }

    static searchByName(name: string): void {
        let result = this.students.filter(element => {
            return element.getName() == name;
        })
        console.table(result)
    }

    static searchByGroup(group: string): Student[] {
        return this.students.filter(element => {
            return element.getGroup() == group;
        })
    }
}
