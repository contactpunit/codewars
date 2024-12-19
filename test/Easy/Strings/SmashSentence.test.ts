import { describe, it, expect } from 'vitest'
import { smash } from '../../../Easy/Strings/SmashSentence'

describe('smash() test suite', () => {
    it.each([
        [["hello"], "hello"],
        [[], ""]
    ])('string %s returns csv %s', (input, result) => {
        expect(smash(input)).toBe(result)
    } )
})