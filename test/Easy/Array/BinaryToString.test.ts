import { describe, it, expect } from 'vitest'
import { decodePass } from '../../../Easy/Array/BinaryToString'

describe('decodePass() test suite', () => {
    it.each([
        [['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011', 'password123'],
        [['password321', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011', false],
        [['password456', 'pass1', 'test12'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011', false]
    ])('input arr %s and bin %s results in %s', (array, bin, diff) => {
        expect(decodePass(array, bin)).toBe(diff)
    })
})