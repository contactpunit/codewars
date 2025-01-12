import { describe, it, expect } from 'vitest'
import { box } from '../../../Easy/Array/SquareBox'

describe('box() test suite', () => {
    it.each([
        [5, ["-----", "-   -", "-   -", "-   -", "-----"]],
        // [2, ["--", "--"]],
        // [4, ["----", "-  -", "-  -", "----"]],
        // [6, ["------", "-    -", "-    -", "-    -", "-    -", "------"]],
        // [3, ["---", "- -", "---"]]
    ])('check if input %s has o/p of %s', (input, score) => {
        expect(box(input)).toEqual(score)
    })
})