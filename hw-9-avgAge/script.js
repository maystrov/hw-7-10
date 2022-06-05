const students = studentsMock.getStudentList(5);
console.table(students);
const Marks_Length = 10;

let avgGroup = students.reduce((sumGroup, studObj) => sumGroup + studObj.marks.reduce((sum, mark) => sum + mark, 0) / Marks_Length, 0) /students.length;
console.log(avgGroup);







