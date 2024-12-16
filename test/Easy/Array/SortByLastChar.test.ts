import {describe, it, expect} from 'vitest'
import { last } from '../../../Easy/Array/SortByLastChar'

describe('last() test suite', () => {
    it.each([
        ['man i need a taxi up to ubud', ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']],
        ['what time are we climbing up the volcano', ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']],
        ['take me to semynak', ['take', 'me', 'semynak', 'to']]
    ])('%s string sorted to %s', (input, result) => {
        expect(last(input)).toEqual(result)
    })
})