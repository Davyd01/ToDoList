function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName; 
  this.birthYear = birthYear; 
  this.grades = []; 
  this.attendance = new Array(25).fill(null);

  this.getAge = function () {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
  };

  this.addGrade = function (grade) {
      if (grade >= 0 && grade <= 100) {
          this.grades.push(grade);
      } else {
          console.log('Оценка должна быть от 0 до 100');
      }
  };

  this.getAverageGrade = function () {
      if (this.grades.length === 0) return 0; 
      const total = this.grades.reduce((sum, grade) => sum + grade, 0);
      return (total / this.grades.length).toFixed(2); 
  };

  this.present = function () {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
          this.attendance[index] = true;
      } else {
          console.log('Массив посещаемости заполнен');
      }
  };

  this.absent = function () {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
          this.attendance[index] = false;
      } else {
          console.log('Массив посещаемости заполнен');
      }
  };

  this.getAttendanceRate = function () {
      const totalPresent = this.attendance.filter(status => status === true).length;
      const totalMarked = this.attendance.filter(status => status !== null).length;
      return totalMarked === 0 ? 0 : (totalPresent / totalMarked).toFixed(2); 
  };

  this.summary = function () {
      const averageGrade = this.getAverageGrade();
      const attendanceRate = this.getAttendanceRate();

      if (averageGrade > 90 && attendanceRate > 0.9) {
          return 'Молодец!';
      } else if (averageGrade > 90 || attendanceRate > 0.9) {
          return 'Добре, але можна краще';
      } else {
          return 'Редиска!';
      }
  };
}

const student1 = new Student('Иван', 'Иванов', 2000);
const student2 = new Student('Мария', 'Петрова', 2002);

student1.addGrade(95);
student1.addGrade(85);
student1.addGrade(100);
student1.present();
student1.present();
student1.absent();

student2.addGrade(75);
student2.addGrade(80);
student2.addGrade(70);
student2.present();
student2.absent();
student2.present();

console.log(`${student1.firstName} ${student1.lastName}:`);
console.log('Возраст:', student1.getAge());
console.log('Средний балл:', student1.getAverageGrade());
console.log('Средняя посещаемость:', student1.getAttendanceRate());
console.log('Итог:', student1.summary());

console.log(`${student2.firstName} ${student2.lastName}:`);
console.log('Возраст:', student2.getAge());
console.log('Средний балл:', student2.getAverageGrade());
console.log('Средняя посещаемость:', student2.getAttendanceRate());
console.log('Итог:', student2.summary());
