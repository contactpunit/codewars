import {describe, it, expect} from 'vitest'
import { all } from '../../../Easy/Array/Enumerable'

describe('all() test suite', () => {
    it.each([
        [[1, 2, 3, 4, 5], function(v) { return v < 9; }, true],
        [[1, 2, 3, 4, 5], function(v) { return v > 9; }, false]
    ])('input array %s result is %s', (input, fn, result) => {
        expect(all(input, fn)).toEqual(result)
    })
})
