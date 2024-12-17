import { describe, it, expect } from 'vitest'
import { toCsvText } from '../../../Easy/Strings/CSV_Represent'

describe('toCsvText() test suite', () => {
    it.each([
        [[
            [ 0, 1, 2, 3, 45 ],
            [ 10,11,12,13,14 ],
            [ 20,21,22,23,24 ],
            [ 30,31,32,33,34 ]
           ], '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34']
    ])('string %s returns csv %s', (input, result) => {
        expect(toCsvText(input)).toBe(result)
    } )
})