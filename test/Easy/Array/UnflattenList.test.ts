import { describe, it, expect } from 'vitest'
import { unflatten } from '../../../Easy/Array/UnflattenList'

describe('unflatten() test suite', () => {
    it.each([
        [[ 3, 5, 2, 1 ], [[ 3,5,2 ], 1 ]],
        [[ 1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3 ], [1, [4,5,2,1], 2, [4,5,2,6], 2, [3, 3] ]]
    ])('lamps %s and drone %s returns at %s', (input, result) => {
        expect(unflatten(input)).toEqual(result)
    } )
})