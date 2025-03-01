import { describe, it, expect } from 'vitest'
import { listToArray } from '../../../Easy/Array/LinkedList2Array'

describe('listToArray test suite', () => {
    const list1 = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
    const list2 = { value: "foo", next: { value: "bar", next: null } };

    it.each([
        [list1, [1, 2, 3]],
        [list2, ["foo", "bar"]]
    ])('input %s gets result %s', (input, result) => {
        expect(listToArray(input)).toEqual(result)
    })
})