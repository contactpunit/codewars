import { describe, it, expect } from 'vitest'
import { validParentheses } from '../../../Easy/Strings/ValidParentheses'
import { sing } from '../../../Easy/Strings/BottlesOfBeer'

describe('sing() test suite', () => {
    it('should test string', () => {
        expect(sing()[0]).toBe('99 bottles of beer on the wall, 99 bottles of beer.')
        expect(sing()[199]).toBe('Go to the store and buy some more, 99 bottles of beer on the wall.')
    })
})