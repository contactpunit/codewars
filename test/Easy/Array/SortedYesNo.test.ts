import { describe, it, expect } from 'vitest'
import { isSortedAndHow } from '../../../Easy/Array/SortedYesNo';

describe('isSortedAndHow() test suite', () => {
    it.each([
        [[1, 3, 9, 4], 'no'],
        [[4, 3, 1, 9], 'no'],
        [[1, 2], 'yes, ascending'],
        [[2, 1], 'yes, descending'],
        [[1, 2, 3, 4], 'yes, ascending'],
        [[1, 1, 2, 3], 'yes, ascending'],
        [[1, 2, 3, 3], 'yes, ascending'],
        [[4, 3, 2, 1], 'yes, descending'],
        [[3, 3, 2, 1], 'yes, descending'],
        [[3, 2, 1, 1], 'yes, descending']
    ])('%s input will result in %s', (input, result) => {
        expect(isSortedAndHow(input)).toBe(result)
    })
})