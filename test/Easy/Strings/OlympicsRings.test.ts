import { describe, it, expect } from 'vitest'
import { olympicRing } from '../../../Easy/Strings/OlympicsRings'

describe('olympicRing() test suite', () => {
    it.each([
        ['wHjMudLwtoPGocnJ', 'Bronze!'],
        ['eCEHWEPwwnvzMicyaRjk', 'Bronze!'],
        ['JKniLfLW', 'Not even a medal!'],
        ['MNXiQNoRjcvjwoBqAp', 'Gold!'],
        ['qRJjpfVAw"', 'Bronze!']
    ])('string %s returns %s', (input, result) => {
        expect(olympicRing(input)).toEqual(result)
    } )
})