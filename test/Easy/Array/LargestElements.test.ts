import { describe, it, expect } from 'vitest'
import { largest } from '../../../Easy/Array/LargestElements'

describe('largest) test suite', () => {

    it.each([
        [2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [9, 10]],
        [0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], []],
        [2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5], [-1, 0]],
        [3, [5, 1, 5, 2, 3, 1, 2, 3, 5], [5, 5, 5]],
        [7, [9, 1, 50, 22, 3, 13, 2, 63, 5], [3, 5, 9, 13, 22, 50, 63]],
        [0, [1, 2, 3, 4, 8, 7, 6, 5], []]
    ])('should find largest %num numbers in array %input', (num, input, expectResult) => {
        const result = largest(num, input)
        expect(result).toEqual(expectResult)
    })
})