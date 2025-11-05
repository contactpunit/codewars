import { describe, it, expect } from 'vitest'
import { solve } from '../../../Easy/Array/SimpleFreqSort'

describe('solve() test suite', () => {
    it.each([
        [[2, 3, 5, 3, 7, 9, 5, 3, 7], [3, 3, 3, 5, 5, 7, 7, 2, 9]],
        [[1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1], [1, 1, 1, 0, 0, 6, 6, 8, 8, 2, 3, 5, 9]],
        [[5, 9, 6, 9, 6, 5, 9, 9, 4, 4], [9, 9, 9, 9, 4, 4, 5, 5, 6, 6]],
        [[4, 9, 5, 0, 7, 3, 8, 4, 9, 0], [0, 0, 4, 4, 9, 9, 3, 5, 7, 8]],
        [[2, 7, 15, 17, 20, 26, 40, 41, 43, 49], [2, 7, 15, 17, 20, 26, 40, 41, 43, 49]]
    ])('input %s returns %s', (input, result) => {
        expect(solve(input)).toEqual(result)
    })
})