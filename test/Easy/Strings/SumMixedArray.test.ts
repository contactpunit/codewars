import { describe, it, expect } from 'vitest'
import { sumMix } from '../../../Easy/Strings/SumMixedArray'

describe('sumMix() test suite', () => {
    it.each([
        [[9, 3, '7', '3'], 22],
        [['5', '0', 9, 3, 2, 1, '9', 6, 7], 42],
        [['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'], 41]
    ])('string %s returns csv %s', (input, result) => {
        expect(sumMix(input)).toBe(result)
    } )
})