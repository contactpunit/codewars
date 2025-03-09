import { describe, it, expect } from 'vitest'
import { sumOfMinimums } from '../../../Easy/Array/SumOfMins'

describe('sumOfMinimums() test suite', () => {
    it.each([
        [[[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]], 9],
        [[[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]], 76]
    ])('input %s and %s results in %s', (input, result) => {
        expect(sumOfMinimums(input)).toBe(result)
    })
})