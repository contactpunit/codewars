import { describe, it, expect } from 'vitest'
import { sortList } from '../../../Easy/Array/SortedListObjects';

describe('sortList() test suite', () => {
    let sortBy = "b"
    let arr = [
        { a: 2, b: 2 },
        { a: 3, b: 40 },
        { a: 1, b: 12 }
    ]
    let expected = [
        { a: 3, b: 40 },
        { a: 1, b: 12 },
        { a: 2, b: 2 }
    ]
    it('test of array id sorted based on sortBy', () => {
        expect(sortList(sortBy, arr)).toEqual(expected)
    });
})