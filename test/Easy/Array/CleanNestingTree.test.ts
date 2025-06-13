import { describe, it, expect } from 'vitest'
import { isCleanlyNested } from '../../../Easy/Array/CleanNestingTree'

describe('isCleanlyNested() test suite', () => {
    it.each([
        [[[[[]], [[]], [[]]], [[]], [[]]], true],
        [[], true],
        [[[], []], true],
        [[[[], [], []], [[], [[]]]], false],
        [[[[[[]], [[]]], [[]]], [[]]], true],
        [[[[[[[], [], [], []], [[[[]], [[]], [[]]]]], [[], [], [], [], [], []]]], [[], [], [], []]], true],
        [[[], [[], [[], [[], [], [], []], [[[], [], [], []], [], [], [[], [], [], [], [], []]], []], []], [], [], [], []], false],
        [[[[], [], [], [], []]], true],
        [[[[[], [], []], [[], [], []], [[], [], []], [[], [], [], [], [], []]]], true]
    ])('input array %s result as %s', (array, result) => {
        expect(isCleanlyNested(array)).toBe(result)
    })
})