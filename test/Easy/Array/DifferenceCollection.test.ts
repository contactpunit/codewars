import { describe, it, expect } from 'vitest'
import { diff } from '../../../Easy/Array/DifferenceCollection';

describe('diff() test suite', () => {
    it.each([
        [["a", "b"], ["a", "b"], []],
        [["a", "b"], [], ["a", "b"]],
        [["a", "b", "z"], ["a", "b"], ["z"]],
        [[], [], []],
        [["a", "b", "z", "d", "e", "d"], ["a", "b", "j", "j"], ["d", "e", "j", "z"]]
    ])('%s input array and other input %s %s will result in %s', (input1, input2, result) => {
        expect(diff(input1, input2)).toEqual(result)
    })
})