import { describe, it, expect } from 'vitest'
import { findAverage } from '../../../Easy/Array/CalculateAverage'

describe('findAverage() test suite', () => {
    it.each([
        [[1, 1, 1], 1],
        [[1, 2, 3], 2],
        [[1, 2, 3, 4], 2.5]
    ])("avegare of %s is %s", (input, result) => {
        expect(findAverage(input)).toBe(result)
    })
})