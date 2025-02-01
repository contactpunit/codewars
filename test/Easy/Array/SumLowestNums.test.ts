import { describe, it, expect } from 'vitest'
import { sumTwoSmallestNumbers } from '../../../Easy/Array/SumLowestNums'

describe('sumTwoSmallestNumbers() test suite', () => {
    it.each([
        [[5, 8, 12, 19, 22], 13],
        [[15, 28, 4, 2, 43], 6],
        [[3, 87, 45, 12, 7], 10],
        [[23, 71, 33, 82, 1], 24],
        [[52, 76, 14, 12, 4], 16]
    ])('input %s returns %s', (input, result) => {
        expect(sumTwoSmallestNumbers(input)).toBe(result)
    })
})