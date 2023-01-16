import { assoc } from '../js/assoc';
import { nanoid } from 'nanoid';

//nanoid
let count = 0
export const generateRandomString = () => {
    // count++
    // console.log('GenerateRandomString:', count);
   return Math.random().toString(36).substring(2, 15);
}

export const assignId = assoc('id', generateRandomString());

// export const assignNano = assoc('id', nanoid())

export const generateId = <O extends object>(obj: O) => assignId(obj)  // assoc('id', generateRandomString());

//