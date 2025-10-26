import { describe, it, expect } from 'vitest'
import { maximumSeating } from '../../../Easy/Array/Cinema2020'

describe('maximumSeating() test suite', () => {
    it.each([
        [[0, 0, 0, 1, 0, 0, 1, 0, 0, 0], 2],
        [[0, 0, 0, 0], 2],
        [[1, 0, 0, 0, 0, 0, 1], 1]
    ])("maximumSeating of %s is %s", (input, result) => {
        expect(maximumSeating(input)).toBe(result)
    })
})