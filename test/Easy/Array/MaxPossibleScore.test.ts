import {describe, it, expect} from 'vitest'
import { maxPossibleScore } from '../../../Easy/Array/MapPossibleScore'

describe('maxPossibleScore() test suite', () => {
    it.each([
        [{"a": 1}, [], 1],
        [{"a": 1}, ["a"], 2],
        [{"a": 1, "b": 14}, ["b"], 29],
        [{"a": 1, "b": 2, "c": 4}, ["a", "b", "c"], 14],
        [{"a": 2, "b": 5, "c": 8}, ["c"], 23]
    ])('input array %s result is %s', (marksmap, questions, result) => {
        expect(maxPossibleScore(marksmap, questions)).toBe(result)
    })
})
