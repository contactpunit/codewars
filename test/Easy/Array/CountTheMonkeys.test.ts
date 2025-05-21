import { describe, it, expect } from 'vitest'
import { monkeyCount } from '../../../Easy/Array/CountTheMonkeys'

describe('monkeyCount() test suite', () => {
    it.each([
        [5, [1, 2, 3, 4, 5]],
        [3, [1, 2, 3]],
        [9, [1, 2, 3, 4, 5, 6, 7, 8, 9]],
        [20, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]]
    ])('input %s results in %s', (input, result) => {
        expect(monkeyCount(input)).toEqual(result)
    })
})