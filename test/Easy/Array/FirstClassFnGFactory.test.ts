import { describe, it, expect } from "vitest";
import { factory } from "../../../Easy/Array/FirstClassFnFactory";
import { before, beforeEach } from "node:test";

describe('Tests Factory Fn', () => {

    it('should multiply every element of array by x', () => {
        const input = [5, 10, 15]
        const expected = [10, 20, 30]
        const mutiplyby2 = factory(2)
        const result = mutiplyby2(input)
        expect(result).toEqual(expected)
    })

    it('should multiply every element of array by x', () => {
        const input = [1, 2, 3]
        const expected = [2, 4, 6]
        const mutiplyby2 = factory(2)
        const result = mutiplyby2(input)
        expect(result).toEqual(expected)
    })

    it('return epty array', () => {
        const input = []
        const expected = []
        const mutiplyby2 = factory(2)
        const result = mutiplyby2(input)
        expect(result).toEqual(expected)
    })
})