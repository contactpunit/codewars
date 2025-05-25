import { describe, it, expect } from 'vitest'
import { getScore } from '../../../Easy/Array/Tetris1'

describe('getScore() test suite', () => {
    it.each([
        // [[0, 1, 2, 3, 4], 1640],
        // [[0, 1, 1, 3, 0, 2, 1, 2], 620],
        // [[2, 0, 4, 2, 2, 3, 0, 0, 3, 3], 3300],
        // [[0], 0],
        [[1, 3, 2, 3, 0, 3, 2, 3, 3, 0, 0, 1, 4, 3, 4, 0, 3, 2, 4, 2, 1, 0, 1, 2, 3, 1, 4, 0, 2, 2, 2, 3, 1, 1, 1, 4, 2], 41340]
    ])('input array %s result is %s', (input, result) => {
        expect(getScore(input)).toBe(result)
    })
})
