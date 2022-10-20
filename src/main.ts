import {Student} from "./Student";
import {StudentManager} from "./StudentManager";
import * as readlineSync from "readline-sync";

let student = new Student('Yến','C08',10,9);
let student1 = new Student('Yến','C08',9,10);
let student2 = new Student('Lâm','C05',8,9);
let student3 = new Student('Thế Anh','C08',6,8);
let student4 = new Student('Khánh','C07',2,7);

StudentManager.add(student1);
StudentManager.add(student);
StudentManager.add(student2);
StudentManager.add(student3);
StudentManager.add(student4);

let isExist = false;

function menu() {
    console.log('1: Hiển thị danh sách')
    console.log('2: Tìm theo ten')
    console.log('3: Tìm theo group ')
    console.log('4: Thêm học viên ')
    console.log('0: Thoát ')
}

while (!isExist) {
    menu()
    let number = readlineSync.question('Chọn chức năng:  ');
    switch(number) {
        case "1":
            StudentManager.showList();
            break;
        case "2":
            let name = readlineSync.question('Nhap name can tim:  ');
            StudentManager.searchByName(name);
            break;

        case "4":
            let nameStudent = readlineSync.question('Nhap name:  ');
            let groupName = readlineSync.question('Nhap groupName:  ');
            let scoreHK1 = +readlineSync.question('Nhap scoreHK1:  ');
            let scoreHK2 = +readlineSync.question('Nhap scoreHK2:  ');
            let student = new Student(nameStudent, groupName, scoreHK1, scoreHK2)

           try {
               StudentManager.add(student);
           } catch (e) {
               console.log(e.message);
           }

            break;
        case "0":
            isExist = true;
            break;
    }
}

