import {describe, it, expect} from 'vitest'
import { countLanguages } from '../../../Easy/Array/CodingMeetup5'

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
]

describe('countLanguages() test suite', () => {
    it.each([
        [list1, { C: 2, JavaScript: 1, Ruby: 1 }]
    ])('%s input %s to be %s', (input, result) => {
        expect(countLanguages(input)).toEqual(result)
    })
})