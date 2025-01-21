import { describe, it, expect } from 'vitest'
import { calculateTotal } from '../../../Easy/Array/ReducingProblems'

describe('calculateTotal() test suite', () => {
    it.each([
        [[1,2,2],[1,0,0], true],
        [[6,45,1],[1,55,0], false],
        [[57,2,1],[], true],
        [[],[3,4,3], false]
    ])('pairZeros %s returns %s', (input1, input2, result) => {
        expect(calculateTotal(input1, input2)).toBe(result)
    })
})