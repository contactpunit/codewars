import { describe, it, expect } from 'vitest'
import { smallEnough } from '../../../Easy/Array/NoLoop'

describe('smallEnough() test suite', () => {
    it.each([
        [[66, 101], 200, true],
        [[78, 117, 110, 99, 104, 117, 107, 115], 100, false],
        [[101, 45, 75, 105, 99, 107], 107, true],
        [[80, 117, 115, 104, 45, 85, 112, 115], 120, true]
    ])('array %s with limit %s result %s', (input, limit, result) => {
        expect(smallEnough(input, limit)).toBe(result)
    })
})