import { describe, it, expect } from 'vitest'
import { swapHeadAndTail } from '../../../Easy/Array/SwapHeadTail'

describe('swapHeadAndTail() test suite', () => {
    it.each([
        [[1, 2, 3, 4, 5], [4, 5, 3, 1, 2]],
        [[-1, 2], [2, -1]],
        [[1, 2, -3, 4, 5, 6, -7, 8], [5, 6, -7, 8, 1, 2, -3, 4]]
    ])('input %s results in %s', (input, result) => {
        expect(swapHeadAndTail(input)).toEqual(result)
    })
})