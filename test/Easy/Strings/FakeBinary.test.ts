import { describe, it, expect } from 'vitest'
import { fakeBin } from '../../../Easy/Strings/FakeBinary'

describe('fakeBin() test suite', () => {
    it.each([
        ['45385593107843568', '01011110001100111'],
        ['509321967506747', '101000111101101'],
        ['366058562030849490134388085', '011011110000101010000011011']
    ])('string %s returns csv %s', (input, result) => {
        expect(fakeBin(input)).toBe(result)
    } )
})