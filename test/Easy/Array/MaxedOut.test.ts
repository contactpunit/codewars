import { describe, it, expect } from 'vitest'
import { maxedOut } from '../../../Easy/Array/MaxedOut'

describe('maxedOut() test suite', () => {
    it.each([
        [[34433, 7676, 5432, 9645, 3245, 6664, 4223, 1122357], "You've pushed me to the max!"],
        [[434, 653, 323, 5645, 322354, 6534, 323, 556, 23122, 324], "You've pushed me to the max!"],
        [[0, 0, 0, 0], 0],
        [[1, 2], 9],
        [[208063.830683574, 6.19992349116331], 9007199254740990]
    ])('array %s has output of %s', (input, result) => {
        expect(maxedOut(input)).toBe(result)
    })
})