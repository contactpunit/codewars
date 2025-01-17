import { describe, it, expect } from 'vitest'
import { minimumSteps } from '../../../Easy/Array/MinimumSteps'

describe('minimumSteps() test suite', () => {
    it.each([
        [[4, 6, 3], 7, 1],
        [[10, 9, 9, 8], 17, 1],
        [[8, 9, 10, 4, 2], 23, 3],
        [[19, 98, 69, 28, 75, 45, 17, 98, 67], 464, 8],
        [[4, 6, 3], 2, 0]
    ])('pairZeros %s returns %s', (input, total, result) => {
        expect(minimumSteps(input, total)).toBe(result)
    })
})