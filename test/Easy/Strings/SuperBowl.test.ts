import { describe, it, expect } from 'vitest'
import { didWeWin } from '../../../Easy/Strings/SuperBowl'

describe('didWeWin() test suite', () => {
    it.each([
        [[[8, "pass"],[5, "sack"],[3, "sack"],[5, "run"]], false],
        [[[12, "pass"],[],[],[]], true],
        [[[5, "pass"],[6, "turnover"],[],[]], false]
    ])('array %s returns %s', (input, result) => {
        expect(didWeWin(input)).toBe(result)
    } )
})