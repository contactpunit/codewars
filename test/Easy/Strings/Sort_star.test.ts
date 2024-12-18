import { describe, it, expect } from 'vitest'
import { twoSort } from '../../../Easy/Strings/Sort_Star'

describe('twoSort() test suite', () => {
    it.each([
       [["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"], 'b***i***t***c***o***i***n'],
       [["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"], 'a***r***e'],
       [["BTC","Bitcoin","Dash","Dash","Monero","Ripple"], 'B***T***C']
    ])('string %s returns code %s', (input, result) => {
        expect(twoSort(input)).toBe(result)
    } )
})