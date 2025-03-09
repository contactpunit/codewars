import { describe, it, expect } from 'vitest'
import { maps } from '../../../Easy/Array/LostWithoutMap'

describe('maps() test suite', () => {
    it.each([
        [[1, 2, 3], [2, 4, 6]],
        [[4, 1, 1, 1, 4], [8, 2, 2, 2, 8]],
        [[2, 2, 2, 2, 2, 2], [4, 4, 4, 4, 4, 4]]
    ])('input %s results in %s', (input, result) => {
        expect(maps(input)).toEqual(result)
    })
})