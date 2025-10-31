import { describe, it, expect } from 'vitest'
import { mergeArrays } from '../../../Easy/Array/MergeSortedArrays'

describe('nthSmallest() test suite', () => {
    it.each([
        [[1, 3, 5], [2, 4, 6], [1, 2, 3, 4, 5, 6]],
        [[2, 4, 8], [2, 4, 6], [2, 4, 6, 8]]
    ])('array %s and another array %s has output of %s', (input1, input2, result) => {
        expect(mergeArrays(input1, input2)).toEqual(result)
    })
})