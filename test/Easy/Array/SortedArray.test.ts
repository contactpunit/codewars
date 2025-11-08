import { describe, it, expect } from 'vitest'
import { nthSmallest } from '../../../Easy/Array/SortedArray';

describe('nthSmallest() test suite', () => {
    const inputs = [
        { input: [2, 4, 6, 8, 10, 12], required: 10, expected: 5 },
        { input: [2, 2, 2, 2, 2], expected: 3, required: 2 },
        { input: [[2, 8, 12], [4, 6, 10]], expected: 5, required: 10 },
        { input: [[1, 5], [2], [4, 8, 9]], expected: 4, required: 5 },
        { input: [[1], [2], [3], [4], [5, 6, 7, 8], [9], [10]], expected: 7, required: 7 }
    ]
    inputs.forEach(({ required, input, expected }) => {
        it('%s input array with number %n will result in %s', () => {
            expect(nthSmallest(expected, ...input)).toBe(required)
        })
    })
})