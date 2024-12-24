import {describe, it, expect} from 'vitest'
import { getFirstPython } from '../../../Easy/Array/CodingMeetup4'

const list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
]

const list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
]

describe('getFirstPython() test suite', () => {
    it.each([
        [list1, 'Victoria, Puerto Rico'],
        [list2, 'There will be no Python developers'],
    ])('%s input can accomodate for total %s only %s result files', (input, result) => {
        expect(getFirstPython(input)).toBe(result)
    })
})