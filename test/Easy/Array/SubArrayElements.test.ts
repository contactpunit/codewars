import { describe, it, expect } from 'vitest'
import { elementsSum } from '../../../Easy/Array/SubArrayElements'

describe('elementsSum() test suite', () => {
    it.each([
        // [[[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]], 0, 16],
        [[[3], [4, 6, 5, 3, 2], [9, 8, 7, 4]], 0, 15],
        // [[[3, 2, 1, 0], [4, 6, 5, 3, 2], []], 0, 7],
        // [[[3, 2, 1, 0], [4, 6, 5, 3, 2], []], 5, 12],
        // [[[3, 2], [4], []], 0, 0]
    ])('input %s and %s results in %s', (input, d, result) => {
        expect(elementsSum(input, d)).toBe(result)
    })
})