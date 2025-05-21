import { describe, it, expect } from 'vitest'
import { sortme } from '../../../Easy/Array/SortArray';

describe('sortme() test suite', () => {
    it.each([
        [['one', 'two', 'three'], ["one", "three", "two"]]
    ])('%s input array of objects %s will result in %s', (input, result) => {
        expect(sortme(input)).toEqual(result)
    })
})