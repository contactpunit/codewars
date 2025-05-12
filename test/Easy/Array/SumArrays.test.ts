import { describe, it, expect } from 'vitest'
import { sum } from '../../../Easy/Array/SumArrays'

describe('sum() test suite', () => {
    it.each([
        [[], 0],
        [[1, 5.2, 4, 0, -1], 9.2]
    ])('input %s returns %s', (input, result) => {
        expect(sum(input)).toBe(result)
    })
})