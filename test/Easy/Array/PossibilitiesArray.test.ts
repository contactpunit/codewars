import { describe, it, expect } from 'vitest'
import { isAllPossibilities } from '../../../Easy/Array/PossibilitiesArray'

describe('isAllPossibilities() test suite', () => {
    it.each([
        [[0, 1, 2, 3], true],
        [[1, 2, 3, 4], false],
        [[0, 1, 2, 2, 3], false],
        [[0], true]
    ])('input %s results %s', (input, result) => {
        expect(isAllPossibilities(input)).toBe(result)
    })
})