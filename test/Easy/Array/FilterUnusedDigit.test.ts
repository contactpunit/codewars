import { describe, it, expect } from 'vitest'
import { unusedDigits } from '../../../Easy/Array/FilterUnusedDigit'

describe('unusedDigits() test suite', () => {
    it.each([
        ["09", 12, 34, 56, 78],
        ["3479", 2015, 8, 26]
    ])('input %s return %s', (result, ...input) => {
        expect(unusedDigits(input)).toBe(result)
    })
})