import { describe, it, expect } from 'vitest'
import { stantonMeasure } from '../../../Easy/Array/StantonMeasure'

describe('stantonMeasure() test suite', () => {
    it.each([
        [[1, 4, 3, 2, 1, 2, 3, 2],3],
        [[1, 4, 1, 2, 11, 2, 3, 1], 1]
    ])('check if input %s has score of %s', (input, score) => {
        expect(stantonMeasure(input)).toBe(score)
    })
})