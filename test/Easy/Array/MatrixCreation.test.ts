import { describe, it, expect } from 'vitest'
import { getMatrix } from '../../../Easy/Array/MatrixCreation'

describe('getMatrix() test suite', () => {
    it.each([
        // [0, []],
        // [1, [[1]]],
        [2, [[1, 0], [0, 1]]],
        [5, [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]]
    ])('pairZeros %s returns %s', (input, result) => {
        expect(getMatrix(input)).toEqual(result)
    })
})