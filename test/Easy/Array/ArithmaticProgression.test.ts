import { arithmeticSequenceElements } from "../../../Easy/Array/ArithmaticProgression";
import {describe, it, expect} from 'vitest'

describe('arithmeticSequenceElements() test suite', () => {
    it.each([
        [1, 2, 5, "1, 3, 5, 7, 9"],
        [1, 0, 5, "1, 1, 1, 1, 1"],
        [1, -3, 10, "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"],
        [100, -10, 10, "100, 90, 80, 70, 60, 50, 40, 30, 20, 10"]
    ])('input array %s result is %s', (a, d, n, result) => {
        expect(arithmeticSequenceElements(a, d, n)).toBe(result)
    })
})
