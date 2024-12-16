import { describe, it, expect } from 'vitest'
import { uefaEuro2016 } from '../../../Easy/Strings/UEFA_EURO_2016'

describe('uefaEuro2016() test suite', () => {
    it.each([
        [['Germany', 'Ukraine'], [2, 0], "At match Germany - Ukraine, Germany won!"],
        [['Belgium', 'Italy'], [0, 2], "At match Belgium - Italy, Italy won!"],
        [['Portugal', 'Iceland'], [1, 1], "At match Portugal - Iceland, teams played draw."]

    ])('input %s with scores %s matches string %s', (input, scores, result) => {
        expect(uefaEuro2016(input, scores)).toBe(result)
    })
})