import { describe, it, expect } from 'vitest'
import { decipher } from '../../../Easy/Strings/Mew_cipher'

describe('decipher() test suite', () => {
    it.each([
        [["u lk zxuq hfk as fouh","y l  zpuv  xe at sicd","welvayfuqbfpeaauaqcrc"], "walk your dog at nine"],
        [["hello world"], "hello world"],
        [["","","","",""], ""],
        [["a  "," b ","  c","   ","   "], '   ']
    ])('string %s returns csv %s', (input, result) => {
        const actual = decipher(input)
        expect(actual).toBe(result)
    } )
})