function add(n1: number, n2: number) {
    return n1 + n2;
};

const printResult = (num: number): void => {
    console.log('Result: ' + num);
};

const addAndHandler = (n1: number, n2: number, cb: (num: number) => void) => {
    const result = n1 + n2;
    cb(result);
};
addAndHandler(10, 20, (result) => {
    console.log(result);
});

printResult(add(5, 12));

let combinedValue: (a: number, b: number) => number;

combinedValue = add;
// combinedValue = printResult;

console.log(combinedValue(8, 8))