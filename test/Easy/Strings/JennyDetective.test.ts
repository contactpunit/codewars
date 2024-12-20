import { describe, it, expect } from 'vitest'
import { missingWord } from '../../../Easy/Strings/JennyDetective'

describe('missingWord() test suite', () => {
    it.each([
        [[5, 0, 3], "I love you", "ivy"],
        [[29, 31, 8], "The quick brown fox jumps over the lazy dog", "bay"],
        [[12, 4, 6], "Good Morning", "No mission today"]
    ])('string %s returns code %s', (nums, str, result) => {
        expect(missingWord(nums, str)).toBe(result)
    } )
})