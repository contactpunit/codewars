import { describe, it, expect } from 'vitest'
import { mergeArrays } from '../../../Easy/Array/MergeArrays'

describe('mergeArrays() test suite', () => {
    it.each([
        [[1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e'], [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]],
        [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5], ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]],
        [[2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's'], [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']],
        [['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6], ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']],
        [[14,49,70,49,18], ["l","r","v","m","m","v","r","y","k","b","b","u","p","r","y","y","b"], [ 14, 'l', 49, 'r', 70, 'v', 49, 'm', 18, 'm', 'v', 'r', 'y', 'k', 'b', 'b', 'u', 'p', 'r', 'y', 'y', 'b' ]]
    ])('input %s and %s results in %s', (input1, input2, result) => {
        expect(mergeArrays(input1, input2)).toEqual(result)
    })
})