import {describe, it, expect} from 'vitest'
import { isRubyComing } from '../../../Easy/Array/Coding Meetup3';

const list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
]
  
const list2 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' } 
]

describe('isRubyComing() test suite', () => {
    it.each([
        [list1, true],
        [list2, false]
    ])('%s input array of objects %s will result in %s', (input, result) => {
        expect(isRubyComing(input)).toBe(result)
    })
})