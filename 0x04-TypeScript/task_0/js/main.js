var student1 = {
    firstName: 'John',
    lastName: 'Aria',
    age: 23,
    location: 'Lagos',
};
var student2 = {
    firstName: 'Johnson',
    lastName: 'Eric',
    age: 25,
    location: 'Abuja',
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var header = document.createElement('tr');
var nameHeading = document.createElement('th');
nameHeading.textContent = 'First Name';
var locationHeading = document.createElement('th');
locationHeading.textContent = 'Location';
header.appendChild(nameHeading);
header.appendChild(locationHeading);
table.appendChild(header);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);
