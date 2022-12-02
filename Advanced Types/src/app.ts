type Admin = {
    name: string;
    privileges: string[];
};

interface Employee {
    name: string;
    startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Rand",
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add (a: string, b: string): string;
function add (a: string, b: number): string;
function add (a: number, b: string): string;
function add (a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b;
};

// Function Overloads
const result = add(1, 'Aung');
result.split(' ');

// Optional Chaining
const fetchedUserData = {
    id: 'u1',
    name: 'Rand',
    job: {
        title: 'CEO',
        desc: 'Own Company'
    }
};

// Nullish Coalescing
const input = '';
const storedData = input ?? 'Default';
console.log(storedData);

type UnknownEmployee = Employee | Admin;

const printEmployeeInfo = (emp: UnknownEmployee) => {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startDate: ' + emp.startDate);
    }
};

printEmployeeInfo(e1);

class Car {
    drive() {
        console.log('Drving a car...');
    }
};

class Truck {
    drive() {
        console.log('Drving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading Cargo:' + amount);
    }
};

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const usedVehicle = (vehicle: Vehicle) => {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(200);
    }
};

usedVehicle(v1);
usedVehicle(v2);

// Discriminated Unions
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

const speedAnimal = (animal: Animal) => {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
        break
        case 'horse':
            speed = animal.runningSpeed
    }
    console.log('Speed: ' + speed);
};

speedAnimal({ type: 'bird', flyingSpeed: 10 }) 
speedAnimal({ type: 'horse', runningSpeed: 20 }) 

// Type Casting
// const userInput = <HTMLInputElement>document.getElementById('user-input')!;
const userInput = document.getElementById('user-input')! as HTMLInputElement;
userInput.value = 'Hi There...';

// Index Propeties
interface ErrorContainer {
    [prop: string]: string
}

const error: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Rand'
};