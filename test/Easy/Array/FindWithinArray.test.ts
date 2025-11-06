import { describe, it, expect } from 'vitest'
import { findInArray } from '../../../Easy/Array/FindWithinArray'

describe('findInArray() test suite', () => {
    let trueIfEven = function (v, i) { return v % 2 === 0; }
    let neverTrue = function (v, i) { return false; }
    let trueIfValueEqualsIndex = function (v, i) { return v === i; }
    let trueIfLengthEqualsIndex = function (v, i) { return v.length === i; }
    it.each([
        [[], trueIfEven, -1],
        [[1, 3, 5, 6, 7], trueIfEven, 3],
        [[2, 4, 6, 8], trueIfEven, 0],
        [[2, 4, 6, 8], neverTrue, -1],
        [[13, 5, 3, 1, 4, 5], trueIfValueEqualsIndex, 4],
        [["one", "two", "three", "four", "five", "six"], trueIfLengthEqualsIndex, 4],
        [["bc", "af", "d", "e"], trueIfLengthEqualsIndex, -1]
    ])('input %s returns %s', (array, iterator, result) => {
        expect(findInArray(array, iterator)).toBe(result)
    })
})