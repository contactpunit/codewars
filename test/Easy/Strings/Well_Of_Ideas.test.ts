import { describe, it, expect } from 'vitest'
import { well } from '../../../Easy/Strings/Well_Of_Ideas'

describe('well() test suite', () => {
    it.each([
       [['bad', 'bad', 'bad'], 'Fail!'],
       [['good', 'bad', 'bad', 'bad', 'bad'], 'Publish!'],
       [['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'], 'I smell a series!']
    ])('string %s returns code %s', (input, result) => {
        expect(well(input)).toBe(result)
    } )
})