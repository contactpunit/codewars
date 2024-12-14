import {describe, it, expect} from 'vitest'
import { capMe } from '../../../Easy/Array/NameArrayCapping'

describe('capMe() test suite', () => {
    it.each([
        [['jo', 'nelson', 'jurie'], ['Jo', 'Nelson', 'Jurie']],
        [['KARLY', 'DANIEL', 'KELSEY'], ['Karly', 'Daniel', 'Kelsey']]

    ])('%s array return capitalized %s', (input, result)=> {
        expect(capMe(input)).toEqual(result)
    })
})