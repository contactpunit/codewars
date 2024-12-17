import { describe, it, expect } from 'vitest'
import { capitals } from '../../../Easy/Strings/FindCapitals'

describe('capitals() test suite', () => {
    it.each([
        ['CodEWaRs', [0,3,4,6]],
        ['aAbB', [1,3]],
        ['', []]
    ])('string %s returns csv %s', (input, result) => {
        expect(capitals(input)).toEqual(result)
    } )
})