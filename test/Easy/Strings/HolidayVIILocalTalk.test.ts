import { describe, it, expect } from 'vitest'
import { pak } from '../../../Easy/Strings/HolidayVIILocalTalk'

describe('pak() test suite', () => {
    it.each([
        ['Man I need a taxi up to Ubud', 'Man pak I pak need pak a pak taxi pak up pak to pak Ubud'],
        ['What time are we climbing up the volcano?', 'What pak time pak are pak we pak climbing pak up pak the pak volcano?'],
        ['Take me to Semynak!', 'Take pak me pak to pak Semynak!']
    ])('string %s returns %s', (input, result) => {
        expect(pak(input)).toBe(result)
    } )
})