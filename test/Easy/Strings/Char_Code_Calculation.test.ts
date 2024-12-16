import { describe, it, expect } from 'vitest'
import { calc } from '../../../Easy/Strings/Char_Code_Calculation'

describe('calc() test suite', () => {
    it.each([
        ['abcdef', 6],
        ['ifkhchlhfd', 6],
        ['aaaaaddddr', 30],
        ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 96],
        ['jfmgklf8hglbe', 6]
    ])('string %s returns code %s', (input, result) => {
        expect(calc(input)).toBe(result)
    } )
})