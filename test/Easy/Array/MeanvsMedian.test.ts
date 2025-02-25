import { describe, it, expect } from 'vitest'
import { meanVsMedian } from '../../../Easy/Array/MeanvsMedian'

describe('meanVsMedian() test suite', () => {
    it.each([
        [[1, 1, 1], 'same'],
        [[1, 2, 37], 'mean'],
        [[7, 14, -70], 'median']
    ])('input %s results in %s', (input, result) => {
        expect(meanVsMedian(input)).toBe(result)
    })
})