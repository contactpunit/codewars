import { describe, it, expect } from 'vitest'
import { bald } from '../../../Easy/Strings/Slaphead'

describe('bald() test suite', () => {
    it.each([
        ['/---------', ['----------', 'Unicorn!']],
        ['/-----/-', ['--------', 'Homer!']],
        ['--/--/---/-/---', ['---------------', 'Careless!']]
    ])('string %s returns array %s', (input, result) => {
        expect(bald(input)).toEqual(result)
    } )
})