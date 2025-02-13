import { describe, it, expect } from 'vitest'
import { total } from '../../../Easy/Array/Sum2Total'

describe('total() test suite', () => {
    it.each([
        [[5, 4, 3, 2, 1], 48],
        [[1, 2, 3, 4, 5], 48],
        [[1, 2, 3, 4], 20],
        [[1, 2, 3], 8],
    ])('input %s returns %s', (input, result) => {
        expect(total(input)).toBe(result)
    })
})