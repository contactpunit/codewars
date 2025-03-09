import { describe, it, expect } from 'vitest'
import { evenNumbers } from '../../../Easy/Array/EvenNumbersArray'

describe('evenNumbers() test suite', () => {
    it.each([
        [[1, 2, 3, 4, 5, 6, 7, 8, 9], 3, [4, 6, 8]],
        [[-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2, [-8, 26]],
        [[6, -25, 3, 7, 5, 5, 7, -3, 23], 1, [6]]
    ])('input array %s last %s nums result is %s', (input, num, result) => {
        expect(evenNumbers(input, num)).toEqual(result)
    })
})
