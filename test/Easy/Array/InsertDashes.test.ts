import {describe, it, expect} from 'vitest'
import { insertDash } from '../../../Easy/Array/InsertDashes'

describe('insertDash() test suite', () => {
    it.each([
        [454793,'4547-9-3'],
        [123456,'123456'],
        [1003567,'1003-567']
    ])('number %s return =s %s string', (num, result) => {
        expect(insertDash(num)).toBe(result)
    })
})