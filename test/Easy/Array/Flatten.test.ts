import { describe, it, expect } from 'vitest'
import { flatten } from '../../../Easy/Array/Flatten'

describe('flatten() test suite', () => {
    it.each([
        [[1, 2, 3], [1, 2, 3]],
        [[[1, 2, 3], ["a", "b", "c"], [1, 2, 3]], [1, 2, 3, "a", "b", "c", 1, 2, 3]],
        [[[3, 4, 5], [[9, 9, 9]], ["a,b,c"]], [3, 4, 5, [9, 9, 9], "a,b,c"]],
        [[[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]], [[3], [4], [5], 9, 9, 8, [1, 2, 3]]]
    ])('hotSingles %s returns %s', (arrays, result) => {
        expect(flatten(arrays)).toEqual(result)
    })
})