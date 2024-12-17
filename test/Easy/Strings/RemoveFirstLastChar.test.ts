import { describe, it, expect } from 'vitest'
import { array } from '../../../Easy/Strings/RemoveFirstLastChar'

describe('array() test suite', () => {
    it.each([
        ['', null],
        ['1', null],
        ['A1,B2', null],
        ['1,2,3', '2'],
        ['1,2,3,4', '2 3'],
        ['A1,B2,C3,D4,E5', 'B2 C3 D4'],
        ['A,1,23,456,78,9,Z', '1 23 456 78 9']
    ])('string %s returns code %s', (input, result) => {
        expect(array(input)).toBe(result)
    } )
})