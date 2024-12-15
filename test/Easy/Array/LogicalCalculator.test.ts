import {describe, it, expect} from 'vitest'
import { logicalCalc } from '../../../Easy/Array/LogicalCalculator'

describe('logicalCalc() test suite', () => {
    it.each([
        [[true, true, true, false], "AND", false],
        [[true, true, true, false], "OR", true],
        [[true, true, true, false], "XOR", true],
        [[true, true, false, false], "AND", false],
        [[true, true, false, false], "OR", true],
        [[true, true, false, false], "XOR", false],
        [[true, false, false, false], "AND", false],
        [[true, false, false, false], "OR", true],
        [[true, false, false, false], "XOR", true],
        [[true, true], "AND", true],
        [[true, true], "OR", true],
        [[true, true], "XOR", false],
        [[false, false], "AND", false],
        [[false, false], "OR", false],
        [[false, false], "XOR", false],
        [[false], "OR", false],
        [[false], "XOR", false],
        [[true], "AND", true],
        [[true], "OR", true],
        [[true], "XOR", true]
    ])('input array %s with operator %s generates o/p %s', (input, operator, result) => {
        expect(logicalCalc(input, operator)).toBe(result)
    })
})