import { describe, it, expect } from 'vitest'
import { hotSingles } from '../../../Easy/Array/HotSingles'

describe('hotSingles() test suite', () => {
    it.each([
        [[1, 2, 3, 3], [3, 2, 1, 4, 5], [4, 5]],
        [["tartar", "blanket", "domino"], ["blanket"], ["tartar", "domino"]],
        [[77, "basketweave"], [78, 42, "basketweave"], [77, 78, 42]],
        [[100, 45, "ciao"], [100, 2, 3, 45, 5], ["ciao", 2, 3, 5]],
        [[10, 200, 30], [10, 20, 3, 4, 5, 200], [30, 20, 3, 4, 5]],
        [[1, 2, 3], [3, 3, 2, 1], []],
        [[], [], []],
        [[1, 2, 3, 3], [], [1, 2, 3]]
    ])('hotSingles %s returns %s', (input1, input2, result) => {
        expect(hotSingles(input1, input2)).toEqual(result)
    })
})