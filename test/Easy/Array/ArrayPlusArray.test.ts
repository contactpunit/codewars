import { describe, it, expect } from 'vitest'
import { arrayPlusArray } from '../../../Easy/Array/ArrayPlusArray'

describe('arrayPlusArray() test suite', () => {
    it.each([
        [[1, 2, 3], [4, 5, 6], 21],
        [[-1, -2, -3], [-4, -5, -6], -21],
        [[100, 200, 300], [400, 500, 600], 2100]
    ])("maximumSeating of %s is %s", (input1, input2, result) => {
        expect(arrayPlusArray(input1, input2)).toBe(result)
    })
})