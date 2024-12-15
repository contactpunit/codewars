import {describe, it, expect} from 'vitest'
import { first } from '../../../Easy/Array/PickSetFirst'

describe('first() test suite', () => {
    it.each([
        [['a', 'b', 'c', 'd', 'e'], 2, ['a', 'b']],
        [['a', 'b', 'c', 'd', 'e'], , ['a']],
        [['a', 'b', 'c', 'd', 'e'], 0, []]
    ])('input array %s and num to pick %s results in %s', (input, num, result) => {
        expect(first(input, num)).toEqual(result)
    })
})
