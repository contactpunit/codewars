import { describe, it, expect } from 'vitest'
import { solution } from '../../../Easy/Array/MeaSquareError'

describe('solution() test suite', () => {
    it.each([
        [[1, 2, 3], [4, 5, 6], 9],
        [[10, 20, 10, 2], [10, 25, 5, -2], 16.5],
        [[0, -1], [-1, 0], 1]
    ])('input1 %s input2 %s results in %s', (input1, input2, result) => {
        expect(solution(input1, input2)).toBe(result)
    })
})