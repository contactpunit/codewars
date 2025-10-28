import { describe, it, expect } from 'vitest'
import { validParentheses } from '../../../Easy/Strings/ValidParentheses'

describe('validParentheses() test suite', () => {
    it.each([
        ["()", true],
        ["((()))", true],
        ["()()()", true],
        [")(()))", false],
        ["(()())()", true],
        ["()()(", false],
        [")(", false],
        ["())(()", false]
    ])('string %s returns csv %s', (input, result) => {
        expect(validParentheses(input)).toBe(result)
    })
})