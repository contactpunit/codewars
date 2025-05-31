import { describe, it, expect } from 'vitest'
import { codeForSameProtein } from '../../../Easy/Array/TwoDNASequences'

describe('codeForSameProtein suite', () => {
    it.each([
        ["ATGTCGTCAATTTAA", "ATGTCGTCAATTTAA", true],
        ["ATGTTTTAA", "ATGTTCTAA", true],
        ["ATGTTTTAA", "ATGATATAA", false],
        ["ATGTTTTAA", "ATGATATAA", false],
        ["ATGTTTGGGAATAATTAAGGGTAA", "ATGTTCGGGAATAATGGGAGGTAA", false]
    ])("input %s and %s return %s", (input1, input2, result) => {
        expect(codeForSameProtein(input1, input2)).toBe(result)
    })
})