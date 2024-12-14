import { describe, it, expect } from 'vitest'
import { wordSearch } from '../../../Easy/Array/PartialWordSarching'

describe('wordSearch() test suite', () => {
    it.each([
        ["ab", ["za", "ab", "abc", "zab", "zbc"], ["ab", "abc", "zab"]],
        ["aB", ["za", "ab", "abc", "zab", "zbc"], ["ab", "abc", "zab"]],
        ["ab", ["za", "aB", "Abc", "zAB", "zbc"], ["aB", "Abc", "zAB"]],
        ["abcd", ["za", "aB", "Abc", "zAB", "zbc"], ["Empty"]]
    ])('search %s under array %s and returns %s', (search, input, result) => {
        expect(wordSearch(search, input)).toEqual(result)
    })
})