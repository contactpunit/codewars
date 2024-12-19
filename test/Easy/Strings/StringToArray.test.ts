import { describe, it, expect } from 'vitest'
import { stringToArray } from '../../../Easy/Strings/StringToArray'

describe('stringToArray() test suite', () => {
    it.each([
        ["Robin Singh", ["Robin", "Singh"]],
        ["I love arrays they are my favorite", ["I", "love", "arrays", "they", "are", "my", "favorite"]]
    ])('string %s returns csv %s', (input, result) => {
        expect(stringToArray(input)).toEqual(result)
    } )
})