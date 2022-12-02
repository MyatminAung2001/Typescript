const userName = "Myatmin Aung";
let age = 21;

// const add = (a: number, b: number) => {
//     return a + b;
// }

console.log(5, 5);

const printOutput = (output: string | number) => {
    console.log(output);
}

// Spread Operators
const hobbies = ['coding', 'reading'];
const activeHobbies = ['playing'];

activeHobbies.push( ...hobbies );

const person = {
    firstName: "Rand",
    age: 21
};

const anotherPerson = { ...person };

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0);
}

const addedNumbers = add(5, 10, 4, 5.6);
console.log(addedNumbers);

// Array & Object Destructuring
const [hobby1, hobby2] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName, age } = person;
