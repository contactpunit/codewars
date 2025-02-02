import { describe, it, expect } from 'vitest'
import { maxProduct } from '../../../Easy/Array/ProductMaximum'

describe('maxProduct() test suite', () => {
    it.each([
        [[4, 3, 5], 2, 20],
        [[10, 8, 7, 9], 3, 720],
        [[8, 6, 4, 6], 3, 288],
        [[10, 2, 3, 8, 1, 10, 4], 5, 9600],
        [[13, 12, -27, -302, 25, 37, 133, 155, -14], 5, 247895375],
        [[-4, -27, -15, -6, -1], 2, 4],
        [[-17, -8, -102, -309], 2, 136],
        [[14, 29, -28, 39, -16, -48], 4, -253344],
        [[1], 1, 1]
    ])('input %s and %s results in %s', (input1, input2, result) => {
        expect(maxProduct(input1, input2)).toBe(result)
    })
})