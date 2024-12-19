import { describe, it, expect } from 'vitest'
import { moveTen } from '../../../Easy/Strings/move10'

describe('moveTen() test suite', () => {
    it.each([
        ["testcase", "docdmkco"],
        ["codewars", "mynogkbc"],
        ["exampletesthere", "ohkwzvodocdrobo"]
    ])('string %s returns %s', (input, result) => {
        expect(moveTen(input)).toBe(result)
    } )
})