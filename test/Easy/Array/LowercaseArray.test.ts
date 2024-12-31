import {it, describe, expect} from 'vitest'
import { arrayLowerCase } from '../../../Easy/Array/LowercaseArray'

describe('arrayLowerCase test suite()', () => {
    it.each([
        [['Red', 'Green'], ['red', 'green']],
        [[1, 'Green'], [1, 'green']]
    ])('%s input array result in %s', (input, output) => {
        expect(arrayLowerCase(input)).toEqual(output)
    })
})