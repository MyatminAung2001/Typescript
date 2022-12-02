const add = (num1: number, num2: number, showResult: boolean, phrase: string) => {
    const result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
};

let number1: number;
number1 = 5; 
const number2 = 5.5;
const printResult = true;
let result = 'Result is: ';

add(number1, number2, printResult, result);