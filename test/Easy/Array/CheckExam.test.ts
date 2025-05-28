import { describe, it, expect } from 'vitest'
import { checkExam } from '../../../Easy/Array/CheckExam'

describe('checkExam suite', () => {
    it.each([
        [["a", "a", "b", "b"], ["a", "c", "b", "d"], 6],
        [["a", "a", "c", "b"], ["a", "a", "b", ""], 7],
        [["a", "a", "b", "c"], ["a", "a", "b", "c"], 16],
        [["b", "c", "b", "a"], ["", "a", "a", "c"], 0]
    ])("input %s and %s return %s", (input1, input2, result) => {
        expect(checkExam(input1, input2)).toBe(result)
    })
})