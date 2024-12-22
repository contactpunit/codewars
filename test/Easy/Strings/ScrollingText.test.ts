import { describe, it, expect } from 'vitest'
import { scrollingText } from '../../../Easy/Strings/scrollingText'

describe('scrollingText() test suite', () => {
    it.each([
        ["abc", ["ABC","BCA","CAB"]]
    ])('array %s returns %s', (input, result) => {
        expect(scrollingText(input)).toEqual(result)
    } )
})