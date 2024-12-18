import { describe, it, expect } from 'vitest'
import { check } from "../../../Easy/Strings/YouNeedOne";

describe('check() test suite', () => {
    it.each([
       [[66, 101], 66, true],
       [[101, 45, 75, 105, 99, 107], 107, true],
       [['t', 'e', 's', 't'], 'e', true],
       [['what', 'a', 'great', 'kata'], 'kat', false]
    ])('array %s with finding match %s results in %s', (array, match, result) => {
        expect(check(array, match)).toBe(result)
    } )
})