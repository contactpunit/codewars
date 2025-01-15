import { describe, it, expect } from 'vitest'
import { noonerize } from '../../../Easy/Array/NoonerizeMe'

describe('noonerize() test suite', () => {
    it.each([
        [[12, 34], 18],
        [[55, 63], 12],
        [[1000000, 9999999], 7000001],
        [[357, 579], 178]
    ])('check if input %s has o/p of %s', (input, result) => {
        expect(noonerize(input)).toBe(result)
    })
})