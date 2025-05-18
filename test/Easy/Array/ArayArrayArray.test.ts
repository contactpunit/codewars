import { describe, it, expect } from 'vitest'
import { explode } from '../../../Easy/Array/ArayArrayArray'

describe('explode() test suite', () => {
    it.each([
        [[9, 3], [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]],
        [['a', 3], [['a', 3], ['a', 3], ['a', 3]]],
        [[6, 'c'], [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]],
        [['a', 'b'], 'Void!'],
        [["a", 0], []]
    ])('check if input %s has o/p of %s', (input, result) => {
        expect(explode(input)).toEqual(result)
    })
})