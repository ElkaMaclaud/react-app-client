import * as React from 'react';
import { isFunctionOrConstructorTypeNode } from 'typescript';
import { getValue } from '../utils/react/pickFromSyntheticEvent';
import { preventDefault } from '../utils/react/preventDefault';
import { stopPropagation } from '../utils/react/stopPropagation';

// onChange={preventDefault(stopPropagation(getValue(onChange)))} 
// onChange={compose(onChange, getValue, stopPropagation, preventDefault)}

function InputExample({ value, onChange }: any) {
    return (
        <input value={value}
        onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
        />
    )
}

function compose<U>(... fns: Function[]) {
    return<E, >(initialValue: any): U => 
        fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue)
}

function pipe<U>(... fns: Function[]) {
    return<E, >(initialValue: any): U => 
        fns.reduce((previousValue, fn) => fn(previousValue), initialValue)
}

function pick<K extends string>(prop: K) {
    return <O extends Record<K, any>>(obj: O) => obj[prop]
}

const some = pick('value')({value: 1}) // -> 1

function isEqual<T>(left: T) {
    return <E extends T>(right: E) => left === right;
}

function cond(b: boolean) {
    return !b;
}

const comments = [{id: 22, text: 'test One'}, {id: 44, text: 'test Two'}]

const filteredComments = comments.filter(pipe(pick('id'), isEqual(22)))//(({id}) => id != 22)

const filteredWithId = (id: number) => pipe(pick('id'), isEqual(id), cond)
const filteredCommentsCond = comments.filter(pipe(pick('id'), isEqual(22), cond))//(({id}) => id != 22)- Наоборот!!!!!!!!!!все id != 22
const filteredCommentsWit = comments.filter(filteredWithId(22))

const createFilterBy = (prop: string) => (id: number) => pipe(pick('id'), isEqual(id), cond);
const filteredWithIdCreatFil = createFilterBy('id');
const filteredWithValue = createFilterBy('value');

const filteredcomment = comments.filter(filteredWithIdCreatFil(22))


const pickFromSyntheticEvent = pipe<number>(
    pick('currentTarget'),
    pick('value'),
    parseInt
);






