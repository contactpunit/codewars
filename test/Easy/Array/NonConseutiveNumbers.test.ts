import { describe, it, expect } from 'vitest'
import { allNonConsecutive } from '../../../Easy/Array/NonConseutiveNumbers'

describe('allNonConsecutive() test suite', () => {
    it.each([
        [[1, 2, 3, 4, 6, 7, 8, 10], [{ i: 4, n: 6 }, { i: 7, n: 10 }]],
    ])('check if input %s has o/p of %s', (input, result) => {
        expect(allNonConsecutive(input)).toEqual(result)
    })
})