import { describe, it, expect } from 'vitest'
import { countPositivesSumNegatives } from '../../../Easy/Array/CountPositiveNegative'

describe('countPositivesSumNegatives() test suite', () => {
    it.each([
        [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], [10, -65]],
        [[0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14], [8, -50]]
    ])('input %s returns %s', (allpairs, result) => {
        expect(countPositivesSumNegatives(allpairs)).toEqual(result)
    })
})