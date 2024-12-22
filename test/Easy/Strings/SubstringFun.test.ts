import { describe, it, expect } from 'vitest'
import { nthChar } from '../../../Easy/Strings/SubstringFun'

describe('nthChar() test suite', () => {
    it.each([
        [[],''],
        [['yoda', 'best', 'has'], 'yes']
    ])('array %s returns %s', (input, result) => {
        expect(nthChar(input)).toBe(result)
    } )
})