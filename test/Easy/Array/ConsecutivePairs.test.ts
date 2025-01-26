import { describe, it, expect } from 'vitest'
import { pairs } from '../../../Easy/Array/ConsecutivePairs'

describe('pairs() test suite', () => {
    it.each([
        [[1,2,5,8,-4,-3,7,6,5], 3],
        [[21, 20, 22, 40, 39, -56, 30, -55, 95, 94], 2],
        [[81, 44, 80, 26, 12, 27, -34, 37, -35], 0],
        [[-55, -56, -7, -6, 56, 55, 63, 62], 4]
    ])('lamps %s and drone %s returns at %s', (allpairs, result) => {
        expect(pairs(allpairs)).toBe(result)
    } )
})