import { describe, it, expect } from 'vitest'
import { outed } from '../../../Easy/Array/Office1Outed'

describe('outed test suite', () => {
    it.each([
        // [{ 'tim': 0, 'jim': 2, 'randy': 0, 'sandy': 7, 'andy': 0, 'katie': 5, 'laura': 1, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 0 }, 'laura', 'Get Out Now!'],
        [{ 'tim': 1, 'jim': 3, 'randy': 9, 'sandy': 6, 'andy': 7, 'katie': 6, 'laura': 9, 'saajid': 9, 'alex': 9, 'john': 9, 'mr': 8 }, 'katie', 'Nice Work Champ!'],
        // [{ 'tim': 2, 'jim': 4, 'randy': 0, 'sandy': 5, 'andy': 8, 'katie': 6, 'laura': 2, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 8 }, 'john', 'Get Out Now!']
    ])('should test if %s array results in %s', (input, boss, actual) => {
        expect(outed(input, boss)).toBe(actual)
    })

})