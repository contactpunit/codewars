import {it, describe, expect} from 'vitest'
import { combine } from '../../../Easy/Array/CombineObjects';

type ObjectShape = { 
    a?: number; 
    b?: number; 
    c?: number; 
    d?: number; 
    e?: number;
};

describe('combine test suite()', () => {
    const objA = { a: 10, b: 20, c: 30 };
    const objB = { a: 3, c: 6, d: 3 };
    const objC = { a: 5, d: 11, e: 8 };
    const objD = { c: 3 };
    it.each([
        [[objA, objB, objC], { a: 18, b: 20, c: 36, d: 14, e: 8 }],
        [[objA, objC, objD], { a: 15, b: 20, c: 33, d: 11, e: 8 }],
        [[objA, objB], { a: 13, b: 20, c: 36, d: 3 }],
        [[objA, objC], { a: 15, b: 20, c: 30, d: 11, e: 8 }],
        [[{}, {}, {}], {}],
        [[objA, objC, {}], { a: 15, b: 20, c: 30, d: 11, e: 8 }]
    ])('%s input array result in %s', (input: ObjectShape[], output: ObjectShape) => {
        expect(combine(...input)).toEqual(output)
    })
})