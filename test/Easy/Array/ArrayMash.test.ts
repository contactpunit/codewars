import {it, describe, expect} from 'vitest'
import { arrayMash } from '../../../Easy/Array/ArrayMash'

describe('arrayMash test suite()', () => {
    it.each([
        [[1, 2, 3], ['a', 'b', 'c'], [1, 'a', 2, 'b', 3, 'c']],
        [[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e'], [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e']],
        [[1, 1, 1, 1], [2, 2, 2, 2], [1, 2, 1, 2, 1, 2, 1, 2]],
        [[1, 8, 'hello', 'dog'], ['fish', '2', 9, 10], [1, "fish", 8, "2", "hello", 9, "dog", 10]],
        [[null, null, 4], [NaN, null, 'hello'], [null, NaN, null, null, 4, "hello"]],
        [['h', 'l', 'o', 'o', 'l'], ['e', 'l', 'w', 'r', 'd'], ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]]
    ])('%s input array has leaders as %s', (input1, input2, output) => {
        expect(arrayMash(input1, input2)).toEqual(output)

    })
})