import { describe, it, expect } from 'vitest'
import { arrayInfo } from '../../../Easy/Array/ArrayInfo'

describe('arrayInfo() test suite', () => {
    it.each([
        [[1, 2, 3.33, 4, 5.01, 'bass', 'kick', ' '], [[8], [3], [2], [2], [1]]],
        [[0.001, 2, ' '], [[3], [1], [1], [null], [1]]],
        [[], 'Nothing in the array!'],
        [['jazz'], [[1], [null], [null], [1], [null]]],
        [[{}], [[1], [null], [null], [null], [null]]]
    ])('input %s returns %s', (input, result) => {
        expect(arrayInfo(input)).toEqual(result)
    })
})