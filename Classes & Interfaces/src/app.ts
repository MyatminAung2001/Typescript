// type AddFun = (a: number, b: number) => Number;
interface AddFun {
    (a: number, b: number): number;
}

let add: AddFun;

add = (n1: number, n2: number) => {
    return n1 + n2
};

interface Name {
    readonly name?: string;
    outputName?: string;
}

interface Greeting extends Name {
    greet(phrase: string): void;
}

class Person implements Greeting {
    name?: string;
    age = 21;

    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi!');
        } 
    }
};

let user1: Greeting;

user1 = new Person();

user1.greet('Hi there - I am');
console.log(user1);