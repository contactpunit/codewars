import { describe, it, expect } from 'vitest'
import { popShift } from '../../../Easy/Array/PopShift'

describe('popShift() test suite', () => {
    it.each([
        ["reusetestcasesbitcointakeovertheworldmaybewhoknowsperhaps", ["spahrepswonkohwebyamdlroweht","reusetestcasesbitcointakeove", "r"]],
        ["turnsoutrandomtestcasesareeasierthanwritingoutbasicones", ["senocisabtuognitirwnahtreis","turnsoutrandomtestcasesaree", "a"]],
        ["exampletesthere", ["erehtse","example","t"]],
        ['dswhvn', [ 'nvh', 'dsw', '' ]],
        ["aa", ["a","a",""]],
        ["b", ["","",'b']],
        ["", ["","",""]]
    ])('pairZeros %s returns %s', (input, result) => {
        expect(popShift(input)).toEqual(result)
    })
})