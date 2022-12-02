// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: "Myatmin Aung",
//     age: 21,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// const Admin = 0;
// const READ_ONLY  = 1;
// const Author = 3;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: "Myatmin Aung",
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

console.log(person.name);

// Nested Objects & Types
// An object type in a object type
const product: {
    id: string,
    price: number,
    tags: string[],
    details: {
        title: string,
        description: string
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
};

// console.log(product.details);