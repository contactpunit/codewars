import { describe, it, expect } from 'vitest'
import { pairZeros } from '../../../Easy/Array/PairZeros'

describe('pairZeros() test suite', () => {
    it.each([
        [[0,0],[0]],
        [[0,0,0],[0,0]],
        [[1],[1]],
        [[1,0,1,0,2,0,0,3,0],[1,0,1,2,0,3,0]]
    ])('pairZeros %s returns %s', (input, result) => {
        expect(pairZeros(input)).toEqual(result)
    })
})