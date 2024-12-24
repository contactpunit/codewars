import {describe, it, expect} from 'vitest'
import { allContinents } from '../../../Easy/Array/CodingMeetup8';

const list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
]
  
const list2 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }
]
  

describe('findSenior() test suite', () => {
    it.each([
        [list1, true],
        [list2, false]
    ])('%s input %s to be %s', (input, result) => {
        expect(allContinents(input)).toBe(result)
    })
})