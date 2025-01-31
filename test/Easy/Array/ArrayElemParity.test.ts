import { describe, it, expect } from 'vitest'
import { solve } from '../../../Easy/Array/ArrayElemParity'

describe('solve() test suite', () => {
    it.each([
        [[1,-1,2,-2,3], 3],
        [[-3,1,2,3,-1,-4,-2], -4],
        [[1,-1,2,-2,3,3], 3],
        [[-110,110,-38,-38,-62,62,-38,-38,-38], -38],
        [[-9,-105,-9,-9,-9,-9,105], -9]
    ])('input %s returns %s', (input, result) => {
        expect(solve(input)).toBe(result)
    })
})