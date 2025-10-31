import { describe, it, expect } from 'vitest'
import { nthSmallest } from '../../../Easy/Array/NSmallestElement'

describe('nthSmallest() test suite', () => {
    it.each([
        [[3, 1, 2], 2, 2],
        [[15, 20, 7, 10, 4, 3], 3, 7],
        [[-102, -16, -1, -2, -367, -9], 5, -2],
        [[2, 1, 3, 3, 1, 2], 3, 2]
    ])('array %s with pos %s has output of %s', (input, pos, result) => {
        expect(nthSmallest(input, pos)).toBe(result)
    })
})