import {describe, it, expect} from 'vitest'
import { addUsername } from '../../../Easy/Array/CodingMeetup10';

const list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
]

const answer = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
      username: 'emilyn1994' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
      username: 'nore2004' }
]

describe('addUsername() test suite', () => {
    it.each([
        [list1, answer]
    ])('%s input array of objects %s will result in %s', (input, result) => {
        expect(addUsername(input)).toEqual(result)
    })
})