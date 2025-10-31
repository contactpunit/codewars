import { describe, it, expect } from 'vitest'
import { maxDiff } from '../../../Easy/Array/MaxDiffEasy'

describe('maxDiff() test suite', () => {
    it.each([
        [[0, 1, 2, 3, 4, 5, 6], 6],
        [[-0, 1, 2, -3, 4, 5, -6], 11],
        [[16], 0],
        [[0, 1, 2, 3, 4, 5, 16], 16],
        [[], 0]
    ])('array %s has output of %s', (input, result) => {
        expect(maxDiff(input)).toBe(result)
    })
})