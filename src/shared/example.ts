// // Js Types .................. // typeof

// import { TypeFormatFlags } from "typescript";

// const str = 'string';   // typeof str ... -> 'string'
// const num = 2;          // typeof number ... -> 'number'
// const nan = NaN;        // typeof nan ... -> 'number'
// const obj = {};         // typeof obj ... -> 'object'
// const arr = [];         // typeof arr ... -> 'object'
// const nul = null;       // typeof nul ... -> 'object'
// const sym = Symbol();   // typeof sym ... -> 'symbol'
// const und = undefined;  // typeof und  ... -> 'undefined'
// const _void = void 0;   // typeof _void  ... -> 'undefined'
// const bool = true;      // typeof bool  ... -> 'boolean' 
// const fn = () => {};    // typeof fn  ... -> 'function'

// let tsStr = 'asd';

// function sumJS(arr) {
//     if (arr instanceof Array) {
//         return arr.reduce((a, v) => a + v);
//     }
//     throw new Error('type mismatch');
// }

// function sumNA(arr) {
//     return arr.concat([1]);
// } 
// function sumNumAr(arr: number[]) {
//     return arr.reduce((a, v) => a + v);
// }

// // 'some' + 2 // --> 'some2'
// // 'some' - 2 // --> NaN
// // '2' +  2  --> '22'
// //  '2' - 2  --> NaN

// const tsNumber = 2;
// const tsString = 'str';

// const result = tsString + tsNumber;
// const resultTwo = parseInt(tsString) - tsNumber;

// if (typeof tsString == 'number') {
//     const resultTwo = tsString - tsNumber;
// }

// // Union type
// const strOrNumber: string | number = '2';

// // Type alias
// type strOrNumber = string | number;
 
// const strOrNumber4: strOrNumber = '2';
// const strOrNumber1: strOrNumber = '2';
// const strOrNumber2: strOrNumber = '2';
// const strOrNumber3: strOrNumber = '2';

// type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

// type StrangeTsTypesFirst = any | unknown | never;

// // Array
// const tsArray: number[] = [1, 2, 3];
// const tsArrayGeneric: Array<number> = [];  

// const unionArray: (string | number)[] = [1, 2,'2'];  
// const unionArray2: Array<string | number> = [1, 2,'2'];

// // Tuple
// const myTuple: [number, string] = [1, '2'];
// const [val1, val2] = myTuple;

// // const [state, setState] = useState();

// // Object
// type MyObjType = { a: number, b: string };
// const myObj: MyObjType = {a: 1, b: '2'};

// interface MyFirstInterface {
//     readonly a: number;
//     readonly b: string;
//     c?: number[];
//     e: number | undefined;
// }

// const myObj2: MyFirstInterface = {
//     a: 1,
//     b: '123',
//     e: undefined,
// };

// // if (myObj2.c) {
// //     const val = myObj2.c;
// // }

// const val = myObj2.c;
// const val2L = myObj2.e;

// //Object.keys(myObj2);

// const ApiAnswer: IndexInterface = { key: 'asd', key1: 'asd' };

// const val3 = ApiAnswer.randomkey;

// //Индекс-сигнатура
// interface IndexInterface {
//     [n: string]: string;
// }

// enum Methods {
//     add = 0,
//     sub = 1,
// }

// // function calculate('add', 5, 5) // --> 10
// function calculate(method: Methods, left: number, right: number): number {
//     switch(method) { 
//         case Methods.add: return left + right;
//         case Methods.sub: return left - right;

//     }
// };

// //console.log(Methods.add) -> 0

// const sum =  calculate(Methods.add, 2, 2); 
// const sub =  calculate(Methods.sub, 4, 2); 

// const ArrowFn: TypeFn = () => 2;

// type TypeFn = () => number; 

// interface FnInterface {
//     (a: number): void;
// }
 
// type StrangeTsTypes = any | unknown | never;

// const some: any = '2'; 
// some.reduce(); 

// const un: unknown = '2';

// if (typeof un === 'string') {
//     un.concat();
// }

// function neverFn(): never {
//     throw new Error('my exception');
// }

// const someValue = neverFn();








