import { describe, it, expect } from 'vitest'
import { divisibleByThree } from '../../../Easy/Strings/By3OrNot'

describe('divisibleByThree() test suite', () => {
    it.each([
        ['123', true],
        ['19254', true],
        ['88', false],
        ['1', false]
    ])('string %s returns %s', (input, result) => {
        expect(divisibleByThree(input)).toBe(result)
    } )
})