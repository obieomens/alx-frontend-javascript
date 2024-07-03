interface Student{
firstName: string;
lastName: string;
age: string;
location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Don",
    age: "43",
    location: "USA",
};
const student2: Student = {
    firstName: "Emma",
    lastName: "Jane",
    age: "31",
    location: "UK",
};
const studentsList: Student[] = [student1, student2]

const table = document.createElement('table');
const headerRow = table.insertRow();
headerRow.insertCell().textContent = "First Name";
headerRow.insertCell().textContent = "Location";

studentsList.forEach(student => {
  const row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});

document.body.appendChild(table);

