import { describe, it, expect } from 'vitest'
import { digitize } from '../../../Easy/Array/NumToReverseArray'

describe('digitize() test suite', () => {
    it.each([
        [35231, [1, 3, 2, 5, 3]],
        [0, [0]]
    ])(' iInput %s results %s', (input, result) => {
        expect(digitize(input)).toEqual(result)
    })
})