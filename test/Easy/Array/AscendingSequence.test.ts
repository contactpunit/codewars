import {describe, it, expect} from 'vitest'
import { makeSequences } from '../../../Easy/Array/AscendingSequences'

describe('makeSequences() test suite', () => {
    it.each([
        [6, 6],
        [10, 14],
        // [1000, 1981471878]
    ])('make squeence for %s should result in %s sequences', (input, num) => {
        expect(makeSequences(input)).toBe(num)
    })
})