import { describe, it, expect } from 'vitest'
import { scramble } from '../../../Easy/Strings/StringScramble'

describe('scramble() test suite', () => {
    it.each([
        ['abcd', [0,3,1,2], 'acdb'],
        ['sc301s', [4,0,3,1,5,2], "c0s3s1"],
        ['bskl5', [2,1,4,3,0], "5sblk"]
    ])('string %s returns %s', (input, array, result) => {
        expect(scramble(input, array)).toBe(result)
    } )
})