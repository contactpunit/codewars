import { describe, it, expect } from 'vitest'
import { removeRotten } from '../../../Easy/Strings/FruitGuy'

describe('removeRotten() test suite', () => {
    it.each([
        [["apple","banana","kiwi","melone","orange"], ["apple","banana","kiwi","melone","orange"]],
        [[], []]
    ])('array %s returns %s', (input, result) => {
        expect(removeRotten(input)).toEqual(result)
    } )
})