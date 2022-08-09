// Primitives: number, string, boolean
// More complex types: arrays objects
// Function types, parameters

// Primitives (Need to be lowercase)
let age: number;

age = 12;

let userName: string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// let hobbies: null;
// hobbies = 123;

// More complex types
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

// let person: {
//     name: string;
//     age: number;
// };

let person: Person;

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: true
// };

// let people: {
//     name: string;
//     age: number;
// }[];

let people: Person[];

// Type inference
// course is inferred to be string automatically
let course = 'React - The Complete Guide';

// course = 12341;

// Union type allows a variable to be different declared type
let unionTypeCourse : string | number | boolean = 'React - The Complete Guide';
unionTypeCourse = 12341; // This is okay

// Functions & types

function add(a: number, b: number): number {
    return a + b;
}

// Return type: void
function printOutput(value: any) {
    console.log(value);
}

// Generics

const demoArray = [1, 2, 3];

// This code will cause the returned array to be any[], which will not be checked.
// which may cause real time error. We should use generics to allow the check to be done.
// function insertAtBeginning(array: any[], value: any){
//     const newArray = [value, ...array];
//     return newArray;
// }

// Type of updatedArray is any[]
// const updatedArray = insertAtBeginning(demoArray, -1) ;// [-1, 1, 2, 3]

// This will crash in runtime.
// updatedArray[0].split('');

// Generics example
function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

// With generics, typescript can infer updatedArray as number[] and stringArray as string[]
const updatedArray = insertAtBeginning(demoArray, -1) ;// [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// This will be flagged out in compile time.
// updatedArray[0].split('')