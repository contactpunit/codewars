import { describe, it, expect } from 'vitest'
import { leastLarger } from '../../../Easy/Array/LeastLarger'

describe('leastLarger() test suite', () => {
    it.each([
        [[4, 1, 3, 5, 6], 0, 3],
        // [[4, 1, 3, 5, 6], 4, -1],
        // [[1, 3, 5, 2, 4], 0, 3]
    ])('Least Larger %s returns %s', (input1, input2, result) => {
        expect(leastLarger(input1, input2)).toBe(result)
    })
})