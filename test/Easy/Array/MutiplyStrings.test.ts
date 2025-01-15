import {describe, it, expect} from 'vitest'
import { arrMultiply } from '../../../Easy/Array/MultiplyStrings'

describe('arrMultiply() test suite', () => {
    it.each([
        [['3', '5'], "15"],
        [['2', '-3'], "-6"],
        [['9', '0'], "0"]

    ])('%s array return capitalized %s', (input, result)=> {
        expect(arrMultiply(input)).toEqual(result)
    })
})