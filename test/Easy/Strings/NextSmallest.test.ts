import { describe, it, expect } from 'vitest'
import { nextSmallest } from '../../../Easy/Strings/NextSmallest'

describe('nextSmallest() test suite', () => {
    it.each([
        [[1, 2, 3], 4],
        [[1, 3, 6, 4, 1, 2], 5],
        [[-1, -3], 1]
    ])('array %s returns %s', (input, result) => {
        expect(nextSmallest(input)).toBe(result)
    })
})