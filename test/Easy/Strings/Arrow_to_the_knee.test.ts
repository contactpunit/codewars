import { describe, it, expect } from 'vitest'
import { ArrowFunc } from '../../../Easy/Strings/Arrow_to_the_knee'

describe('ArrowFunc() test suite', () => {
    it.each([
        [[84,101,115,116], 'Test'],
        [[70,85,83,32,82,79,72,32,68,65,72], 'FUS ROH DAH']
    ])('string %s returns code %s', (input, result) => {
        expect(ArrowFunc(input)).toBe(result)
    } )
})