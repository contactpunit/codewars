import { describe, it, expect } from 'vitest'
import { twoOldestAges } from '../../../Easy/Array/TwoOldestAges'

describe('twoOldestAges() test suite', () => {
    it.each([
        [[1, 5, 87, 45, 8, 8], [45, 87]],
        [[6, 5, 83, 5, 3, 18], [18, 83]],
        [[49, 76, 41, 56, 2, 59, 29, 97, 93, 93, 66, 77, 61, 29, 37, 32, 33, 81, 74, 87, 42, 21, 83], [93, 97]]
    ])('input %s returns %s', (input, result) => {
        expect(twoOldestAges(input)).toEqual(result)
    })
})