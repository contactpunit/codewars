import {describe, it, expect} from 'vitest'
import { betweenExtremes } from '../../../Easy/Array/BetweenExtremes'

describe('betweenExtremes() test suite', () => {
    it.each([
        [[21, 34, 54, 43, 26, 12], 42],
        [[-1, -41, -77, -100], 99]
    ])('should find diff between largest in array %s as %s', (array, diff) => {
        expect(betweenExtremes(array)).toBe(diff)
    })
})