import { describe, it, expect } from 'vitest'
import { transposeTwoStrings } from '../../../Easy/Strings/TransposeStrings'

describe('transposeTwoStrings() test suite', () => {
    it.each([
        [['Hello', 'World'], "H W\ne o\nl r\nl l\no d"],
        [['joey', 'louise'], "j l\no o\ne u\ny i\n  s\n  e"],
        [['a', 'cat'], "a c\n  a\n  t"],
        [['cat', ''], "c  \na  \nt  "],
        [['!a!a!', '?b?b'], "! ?\na b\n! ?\na b\n!  "]
    ])('string %s returns %s', (input, result) => {
        expect(transposeTwoStrings(input)).toBe(result)
    } )
})