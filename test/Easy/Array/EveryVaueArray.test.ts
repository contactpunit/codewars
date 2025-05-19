import { describe, it, expect } from 'vitest'
import { arrCheck } from '../../../Easy/Array/EveryValueArray'

describe('arrCheck() test suite', () => {
    it.each([
        [[], true],
        [[['string']], true],
        [[[], {}], false],
        [[[1], [2], [3]], true],
        [['A', 'R', 'R', 'A', 'Y'], false]
    ])('input %s return %s', (input, result) => {
        expect(arrCheck(input)).toBe(result)
    })
})
