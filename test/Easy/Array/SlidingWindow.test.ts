import { describe, it, expect } from 'vitest'
import { window } from '../../../Easy/Array/SidingWindows'

describe('window() test suite', () => {
    it.each([
        [2, 1, [0, 1, 2, 3, 4], [[0, 1], [1, 2], [2, 3], [3, 4]]],
        [2, 2, [0, 1, 2, 3, 4], [[0, 1], [2, 3]]],
        [3, 1, [0, 1, 2], [[0, 1, 2]]],
        [2, 1, [0, 1, 2], [[0, 1], [1, 2]]],
        [1, 1, [0, 1, 2], [[0], [1], [2]]],
        [0, 1, [0, 1, 2], [[], [], [], []]]
    ])('input %s and %s returns %s', (length, offset, list, result) => {
        expect(window(length, offset, list)).toEqual(result)
    })
})