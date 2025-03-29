import { describe, it, expect } from 'vitest'
import { driver } from '../../../Easy/Array/DrivingLicense'

describe('driver() test suite', () => {
    it.each([
        [["John", "James", "Smith", "01-Jan-2000", "M"], 'SMITH001010JJ9AA'],
        [["Johanna", "", "Gibbs", "13-Dec-1981", "F"], 'GIBBS862131J99AA'],
        [["Andrew", "Robert", "Lee", "02-September-1981", "M"], 'LEE99809021AR9AA']
    ])('%s input to result in %s', (input, result) => {
        expect(driver(input)).toBe(result)
    })
})