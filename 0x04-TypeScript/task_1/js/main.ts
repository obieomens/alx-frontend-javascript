interface Teacher {
readonly firstName: string;
readonly lastName: string;
fullTimeEmployee: boolean;
yearOfExperience?: number;
location: string;
[key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}
 
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
}



const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};


console.log(teacher3);

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

const printTeacher: printTeacherFunction = (firstName, lastName) =>{
    return `${firstName.charAt(0)}. ${lastName}`;
};
console.log(printTeacher('John', 'Doe'));
    

