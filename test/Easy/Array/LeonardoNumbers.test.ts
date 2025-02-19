import { describe, it, expect } from 'vitest'
import { L } from '../../../Easy/Array/LeonardoNumbers'

describe('L() test suite', () => {
    it.each([
        [5, 1, 1, 1, [1, 1, 3, 5, 9]],
        [5, 0, 0, 2, [0, 0, 2, 4, 8]],
        [5, 0, 0, 0, [0, 0, 0, 0, 0]]
    ])('input %s , %s, %s and %s returns %s', (num1, num2, num3, fn, result) => {
        expect(L(num1, num2, num3, fn)).toEqual(result)
    })
})