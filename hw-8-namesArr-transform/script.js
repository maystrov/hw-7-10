
const student = studentsMock.getStudent;
console.log(student);

const students = studentsMock.getStudentList(3);
console.table(students);

let namesArr = students.map(el => el.name);
console.log(namesArr);



