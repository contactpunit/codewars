import { describe, it, expect } from 'vitest'
import { planeSeat } from '../../../Easy/Strings/HolidayII'

describe('planeSeat() test suite', () => {
    it.each([
        ['2B', 'Front-Left'],
        ['20B', 'Front-Left'],
        ['58I', 'No Seat!!']
    ])('string %s returns code %s', (str, result) => {
        expect(planeSeat(str)).toBe(result)
    } )
})