import { describe, it, expect } from 'vitest'
import { calculateTotal } from '../../../Easy/Array/ReducingProblems'
import { sectSort } from '../../../Easy/Array/SectionalSort'

describe('sectSort() test suite', () => {
    it.each([
        [[1, 2, 5, 7, 4, 6, 3, 9, 8], 2, 0, [1, 2, 3, 4, 5, 6, 7, 8, 9]],
        [[9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5, [9, 7, 1, 2, 3, 4, 5, 8, 6]]
    ])('input %s with start %s returns %s', (input1, input2, input3, result) => {
        expect(sectSort(input1, input2, input3)).toEqual(result)
    })
})