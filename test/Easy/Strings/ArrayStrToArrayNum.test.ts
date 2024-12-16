import {describe, it, expect} from 'vitest'
import { toNumberArray } from '../../../Easy/Strings/ArrayStrToArrayNum'

describe('toNumberArray() test suite', () => {
    it.each([
        [["1.1","2.2","3.3"], [1.1,2.2,3.3]]
    ])('%s string array gives %s num array', (input, result) => {
        expect(toNumberArray(input)).toEqual(result)
    })
})