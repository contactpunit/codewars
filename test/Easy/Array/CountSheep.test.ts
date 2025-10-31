import { describe, it, expect } from 'vitest'
import { countSheeps } from '../../../Easy/Array/CountSheep'

describe('countSheeps() test suite', () => {
    it.each([
        [[undefined], 0],
        [[null], 0],
        [[false], 0],
        [[true], 1],
        [[undefined, null, false, true], 1],
        [[true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true], 17],
        [[undefined, null, false, true, true, false, null, undefined], 2]
    ])('input %s returns %s', (sheeps, result) => {
        expect(countSheeps(sheeps)).toBe(result)
    })
})