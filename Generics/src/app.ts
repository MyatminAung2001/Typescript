const names: Array<string> = []; // string[]
// names[0].split(' ')

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Done...')
//     }, 2000)
// });

// promise.then(data => {
//     data.split(' ');
// })

// Generic Function
const merge = <T extends object, U extends object>(objA: T, objB: U) => {
    return Object.assign(objA, objB)
};
const mergeObj = merge({name: "Rand", hobbies: ['Sports']}, {age: 21});
console.log(mergeObj);


interface Length {
    length: number
}

const countAndDesc = <T extends Length>(element: T): [T, string] => {
    let desc = 'No value.';
    if (element.length === 1) {
        desc = 'Got 1 Elements.';
    } else if (element.length > 1) {
        desc = 'Got ' + element.length + ' elements.';
    }
    return [element, desc];
};
console.log(countAndDesc(['Sports', 'Cooking']));

// Keyof Constraint
const extractAndConvert = <T extends object, U extends keyof T>(obj: T, key: U) => {
    return 'Value ' + obj[key]
};
extractAndConvert({name: "Rand"}, 'name');

// Generic Class
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }   
        this.data.splice(this.data.indexOf(item), 1); // -1
    }

    getItems() {
        return [...this.data];
    }
};

const textStorage = new DataStorage<string>();
textStorage.addItem('Rand');
textStorage.addItem('Myat');
textStorage.removeItem('Myat');
console.log(textStorage);

// const numberStorage = new DataStorage<number>();
// numberStorage.addItem(10);
// numberStorage.addItem(20);
// numberStorage.removeItem(10);
// console.log(numberStorage);

// const objStorage = new DataStorage<object>();
// const randObject = {name: "Rand"}
// objStorage.addItem({name: "Rand"});
// objStorage.addItem({name: "Manu"});
// objStorage.removeItem(randObject);
// console.log(objStorage.getItems());

// Generic Utility Types
interface CourseGoal {
    title: string;
    desc: string;
    complete: Date;
}

const createCourseGoal = (
    title: string, desc: string, date: Date
): CourseGoal => {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.desc = desc;
    courseGoal.complete = date;
    return courseGoal as CourseGoal;
}

const nicknames: Readonly<string[]> = ['Rand', 'Alexia Sandros'];
// nicknames.push('Manu');