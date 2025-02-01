import { describe, it, expect } from 'vitest'
import { tidyNumber } from '../../../Easy/Array/TidyNumbers'

describe('tidyNumber() test suite', () => {
    it.each([
        [12, true],
        [102, false],
        [9672, false],
        [2789, true],
        [2335, true]
    ])('input %s returns %s', (input, result) => {
        expect(tidyNumber(input)).toBe(result)
    })
})