class User {
  constructor(name, surname) {
    this.today = new Date().getFullYear();
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
 getCourse() {
        let date = new Date();
        let thisYear = date.getFullYear();
        let course = 0;

        course = thisYear - this.year;
        return thisYear === this.year ? 'Студент учится на 1 курсе.' : course > 5 ? 'Студент уже не учится.' : 'Студент учится на ' + course + ' курсе.';
    }
}


const student = new Student("Сергей", "Сидоров", 2018);
console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());

const studentOne = new Student("Ася", "Иванова", 2022);
console.log(studentOne.name);
console.log(studentOne.surname);
console.log(studentOne.getFullName());
console.log(studentOne.year);
console.log(studentOne.getCourse());

const studentTwo = new Student("Петя", "Петров", 2015);
console.log(studentTwo.name);
console.log(studentTwo.surname);
console.log(studentTwo.getFullName());
console.log(studentTwo.year);
console.log(studentTwo.getCourse());