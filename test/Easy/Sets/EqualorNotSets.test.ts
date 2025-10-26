import { describe, it, expect, beforeEach } from 'vitest'
import { areEqual, notEqual } from '../../../Easy/Sets/EqualorNotSets'

describe('areEqual() and notEqual() test suite', () => {
    let A1, A2, B, D
    beforeEach(() => {
        A1 = new Set([1, 2, 3])
        A2 = new Set([3, 2, 1])
        B = new Set([1, 2, 5])
        D = new Set(['1', '2,', '3'])
    })
    it('should return true areEqual() is a equal else false', () => {
        expect(areEqual(A1, A1)).toBe(true)
        expect(areEqual(A1, A2)).toBe(true)
        expect(areEqual(A2, A1)).toBe(true)
        expect(areEqual(A1, B)).toBe(false)
        expect(areEqual(A1, D)).toBe(false)
    })

    it('should return true if notEqual() is notequal else false', () => {
        expect(notEqual(A1, B)).toBe(true)
        expect(notEqual(A1, new Set())).toBe(true)
        expect(notEqual(A1, A2)).toBe(false)
        expect(notEqual(A1, D)).toBe(true)
    })
})
