import { describe, it, expect } from 'vitest'
import { binRota } from '../../../Easy/Array/LazyStartup'

describe('binRota() test suite', () => {
    it.each([
        [[["Bob","Nora"],["Ruby","Carl"]],["Bob","Nora","Carl","Ruby"]],
        [[["Billy"]],["Billy"]],
        [[["Billy", "Nancy"]],["Billy","Nancy"]],
        [[["Billy"],["Megan"],["Aki"],["Arun"],["Joy"]],["Billy", "Megan", "Aki", "Arun","Joy"]],
        [[["Sam","Nina","Tim","Helen","Gurpreet","Edward","Holly","Eliza"],["Billy","Megan","Aki","Arun","Joy","Anish","Lee","Maryan"],["Nick","Josh","Pete","Kavita","Daisy","Francesca","Alfie","Macy"]],["Sam","Nina","Tim","Helen", "Gurpreet", "Edward", "Holly", "Eliza","Maryan","Lee","Anish","Joy","Arun","Aki","Megan","Billy","Nick","Josh","Pete","Kavita","Daisy","Francesca","Alfie","Macy"]],
        [[["Stefan","Raj","Marie"],["Alexa","Amy","Edward"],["Liz","Claire","Juan"],["Dee","Luke","Elle"]],["Stefan","Raj","Marie","Edward","Amy","Alexa","Liz","Claire","Juan","Elle","Luke","Dee"]]
    ])('input %s and %s results in %s', (input, result) => {
        expect(binRota(input)).toEqual(result)
    })
})