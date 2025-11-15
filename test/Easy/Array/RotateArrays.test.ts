import { describe, it, expect } from 'vitest'
import { rotate } from '../../../Easy/Array/RotateArray'

describe('rotate() test suite', () => {
    it.each([
        [[1, 2, 3, 4, 5], 1, [5, 1, 2, 3, 4]],
        [[1, 2, 3, 4, 5], 2, [4, 5, 1, 2, 3]],
        [[1, 2, 3, 4, 5], 3, [3, 4, 5, 1, 2]],
        [[1, 2, 3, 4, 5], 12478, [3, 4, 5, 1, 2]],
        [[1, 2, 3, 4, 5], -2, [3, 4, 5, 1, 2]]
    ])('rotate %s with n %s returns %s', (input, n, result) => {
        expect(rotate(input, n)).toEqual(result)
    })
})