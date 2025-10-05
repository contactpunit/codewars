import { describe, it, expect } from 'vitest'
import { search } from '../../../Easy/Array/FilterCoffee'

describe('search() test suite', () => {
    it.each([
        [3, [6, 1, 2, 9, 2], "1,2,2"],
        [14, [7, 3, 23, 9, 14, 20, 7], "3,7,7,9,14"],
        [0, [6, 1, 2, 9, 2], ""]
    ])('input %s return %s', (input, prices, result) => {
        expect(search(input, prices)).toBe(result)
    })
})