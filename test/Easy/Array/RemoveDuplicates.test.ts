import { describe, it, expect } from 'vitest'
import { distinct } from '../../../Easy/Array/RemoveDuplicates'

describe('distinct() test suite', () => {
    it.each([
        [[1], [1]],
        [[1, 2], [1, 2]],
        [[1, 1, 2], [1, 2]],
        [[1, 2, 1, 1, 3, 2], [1, 2, 3]]
    ])('%s array to %s', (input, result) => {
        expect(distinct(input)).toEqual(result)
    })
})