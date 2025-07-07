interface Student {
    firstName: string;
    lastName: string;
    age: number,
    location: string;
}
const student1: Student = {
    firstName: 'John',
    lastName:  'Aria',
    age: 23,
    location: 'Lagos',

}
const student2: Student = {
    firstName: 'Johnson',
    lastName:  'Eric',
    age: 25,
    location: 'Abuja',

}
const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
const header = document.createElement('tr');

const nameHeading = document.createElement('th');
nameHeading.textContent = 'First Name';
const locationHeading = document.createElement('th');
locationHeading.textContent = 'Location';

header.appendChild(nameHeading);
header.appendChild(locationHeading);
table.appendChild(header);

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);

