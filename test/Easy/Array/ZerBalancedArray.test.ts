import {describe, it, expect} from 'vitest'
import { ìsZeroBalanced } from '../../../Easy/Array/ZerBalancedArray'

describe('ìsZeroBalanced() test suite', () => {
    it.each([
        [[3],false],
        [[0,0,0,0,0,0],true],
        [[ 3, 7, -2, -8 ], false],
        [[ 9, 0, 6 ], false],
        [[ -6, -3, -3, 8, -10, -4 ], false],
        [[ 1, 2, 0, 4, 3 ], false]
    ])('input array %s isbalanced result is %s', (input, result) => {
        expect(ìsZeroBalanced(input)).toBe(result)
    })
})
