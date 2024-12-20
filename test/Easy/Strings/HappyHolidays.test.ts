import { describe, it, expect } from 'vitest'
import { sortReindeer } from '../../../Easy/Strings/HappyHolidays'

describe('sortReindeer() test suite', () => {
    it.each([
        [[
            "Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall",
            "Comet Karavani", "Cupid Foroutan", "Donder Jonker", "Blitzen Claus"
          ], [
            "Prancer Chua", "Blitzen Claus", "Cupid Foroutan", "Vixen Hall",
            "Donder Jonker", "Comet Karavani", "Dancer Moore", "Dasher Tonoyan"
          ]]
    ])('array %s returns array %s', (input, result) => {
        expect(sortReindeer(input)).toEqual(result)
    } )
})