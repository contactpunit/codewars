import { describe, it, expect } from "vitest";
import { getNewNotes } from "../../../Easy/Array/NewNotes";

describe('NewNotes() test suite', () => {
    it.each([
        [2000, [500, 160, 400],188],
        [1260, [500, 50, 100],122],
        [3600, [1800, 350, 460, 500, 15],95],
        [1995, [1500, 19, 44],86],
        [10000, [1800, 500, 1200, 655, 150],1139],
        [2300, [590, 1500, 45, 655, 150],0],
        [5300, [1190, 1010, 1045, 55, 10, 19, 55],383]
    ])('amount %s with expenses %s remains 5poud notes %s', (amount, expenses, remain) => {
        expect(getNewNotes(amount, expenses)).toBe(remain)
    })
})