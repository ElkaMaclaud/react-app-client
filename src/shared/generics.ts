// //Employer 1
// type TypeFn1 =  (a: string, b: string) => string;
// const concatMy: TypeFn1 = (a, b) => {
//     return  a + ' ' + b
// }

// const strMy = concatMy('Hello', 'world') // -> Hello World;

// //Employer 2
// interface MyObject {
//     howIDolt: string;
//     simeArray: [string, string, number];
//     withData: [{["howIDolt"]: ["howIDolt"], ["simeArray"]:[string, number]}]
// }

// const MyHometask = {
//     howIDolt: "I Do It Wel",
//     simeArray: ["string one", "string two", 42],
//     withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
// }

// const variable = MyHometask.withData[0].howIDoIt

// //Employer 3



// //generic
// const myArray: MyArray<number> = [1,2,3];

// interface MyArray<T> {
//     [N: number]: T;

//     //map<U>(fn: (el: T, index: number, arr: MyArray<T>) => T)
//     map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>;

//     reduce(fn: (elFirst: T, currentEl: T, currentIndex: number, arr: T[]) => T): T;
// }
// myArray.map((f, index, ar) => f + 1);
// myArray.map((f) => `f + ${1}`)





// function identity<T>(arg: T): T {
//     return arg
// }

// let result = identity(12);


// function getLen<T extends Array<any>>(arr: T): number {
//     return arr.length
// }

// getLen([1, 2, 4]);

// interface IValueWithType<T> {
//       type: string;
//       value: T   
// }

// function withType<U>(arg: U): IValueWithType<U> {
//     return {
//         type: typeof arg,
//         value: arg
//     }
// }

// const result2 = withType(123);

// // Встроенные generics

// interface IExample<T> {
//     type: string;
//     value: T;
//     isEmpty: boolean;
// }

// const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
//     type: 'asd'
// }

// const picked: Pick<IExample<number>, 'isEmpty'> = {
//     isEmpty: true;
// }

// const partial: Partial<IExample<object>> = {
    
// }



// //Employer 4
// interface IHomeTask {
//     data: string;
//     numbericData: number;
//     date: Date;
//     externalData: {
//         basis: number;
//         value: string;
//     }
// }

// const homeTask: MyPartial<IHomeTask> = {
//     externalData: {
//         value: 'win'
//     }
// }

// type MyPartial<T> = {
//     [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
// }

// //Employer 5
// function HomeComponent(props: { firstProp: string }) {
//     return (
//         <div>
//             { props.firstProp }
//         </div>
//     )
// }















