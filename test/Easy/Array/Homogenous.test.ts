import { describe, it, expect } from 'vitest'
import { filterHomogenous } from '../../../Easy/Array/Homogenous'

describe('filterHomogenous() test suite', () => {
    it.each([
        [[[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], [[1, 5, 4], ['b']]],
        [[[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []], [[123, 234, 432], ['', 'abc'], [''], ['', '1']]],
    ])('hotSingles %s returns %s', (arrays, result) => {
        expect(filterHomogenous(arrays)).toEqual(result)
    })
})