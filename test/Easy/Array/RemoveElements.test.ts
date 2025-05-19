import { describe, it, expect } from 'vitest'
import { removeEveryOther } from '../../../Easy/Array/RemoveElements'

describe('removeEveryOther() test suite', () => {
    it.each([
        [['Hello', 'Goodbye', 'Hello Again'], ['Hello', 'Hello Again']],
        [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 9]],
        [[[1, 2]], [[1, 2]]],
        [[['Goodbye'], { 'Great': 'Job' }], [['Goodbye']]]
    ])('input %s returns %s', (input, result) => {
        expect(removeEveryOther(input)).toEqual(result)
    })
})