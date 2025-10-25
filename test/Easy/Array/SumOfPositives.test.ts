import { describe, it, expect } from 'vitest'
import { swapHeadAndTail } from '../../../Easy/Array/SwapHeadTail'
import { positiveSum } from '../../../Easy/Array/SumOfPositives'

describe('positiveSum() test suite', () => {
    it.each([
        [[1, 2, 3, 4, 5], 15],
        [[1, -2, 3, 4, 5], 13],
        [[], 0],
        [[-1, -2, -3, -4, -5], 0],
        [[-1, 2, 3, 4, -5], 9]
    ])('input %s results in %s', (input, result) => {
        expect(positiveSum(input)).toBe(result)
    })
})