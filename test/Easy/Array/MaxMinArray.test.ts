import { describe, it, expect } from 'vitest'
import { solve } from '../../../Easy/Array/MaxMinArray'

describe('solve() test suite', () => {
    it.each([
        [[15, 11, 10, 7, 12], [15, 7, 12, 10, 11]],
        [[91, 75, 86, 14, 82], [91, 14, 86, 75, 82]],
        [[84, 79, 76, 61, 78], [84, 61, 79, 76, 78]],
        [[78, 79, 52, 87, 16, 74, 31, 63, 80], [87, 16, 80, 31, 79, 52, 78, 63, 74]],
        [[1, 6, 9, 4, 3, 7, 8, 2], [9, 1, 8, 2, 7, 3, 6, 4]]
    ])('input array %s result is %s', (input, result) => {
        expect(solve(input)).toEqual(result)
    })
})
