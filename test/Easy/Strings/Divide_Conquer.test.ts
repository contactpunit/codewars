import { describe, it, expect } from 'vitest'
import { divCon } from '../../../Easy/Strings/Divide_Conquer'

describe('divCon() test suite', () => {
    it.each([
        [[9, 3, '7', '3'], 2],
        [['5', '0', 9, 3, 2, 1, '9', 6, 7], 14],
        [['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'], 13]
    ])('string %s returns code %s', (input, result) => {
        expect(divCon(input)).toBe(result)
    } )
})