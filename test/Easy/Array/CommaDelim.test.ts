import { it, describe, expect } from 'vitest'
import { printArray } from '../../../Easy/Array/CommaDelim';

describe('printArray test suite()', () => {
    it.each([
        [[2, 4, 5, 2], "2,4,5,2"],
        [[2.0, 4.2, 5.1, 2.2], "2,4.2,5.1,2.2"],
        [["2", "4", "5", "2"], "2,4,5,2"],
        [[["hello", "this", "is", "an", "array!"], [1, 2, 3, 4, 5]], "hello,this,is,an,array!,1,2,3,4,5"],
        [[{ firstName: "Ruslan", lastName: "López" }, { firstName: "John", lastName: "Doe" }], '[object Object],[object Object]']
    ])('%s input array result in %s', (input, output) => {
        expect(printArray(input)).toBe(output)
    })
})