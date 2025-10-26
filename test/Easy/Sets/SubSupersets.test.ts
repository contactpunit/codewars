import { describe, it, expect, beforeEach } from 'vitest'
import { isSubsetOf, isSupersetOf } from '../../../Easy/Sets/SubSupersets'

describe('isSupersetOf() and isSubsetOf() test suite', () => {
    let A1, A2, B, X
    beforeEach(() => {
        A1 = new Set([1, 2, 3])
        A2 = new Set([3, 2, 1])
        B = new Set([1, 2, 3, 4, 5])
        X = new Set([1, 2, 4, 5, 6, 7])
    })
    it('should return true isSubsetOf() is a subset else false', () => {
        expect(isSubsetOf(A1, A1)).toBe(true)
        expect(isSubsetOf(A1, A2)).toBe(true)
        expect(isSubsetOf(A1, B)).toBe(true)
        expect(isSubsetOf(A1, X)).toBe(false)
    })

    it('should return true if isSupersetOf() is a superset else false', () => {
        expect(isSupersetOf(A1, A1)).toBe(true)
        expect(isSupersetOf(A1, A2)).toBe(true)
        expect(isSupersetOf(B, A1)).toBe(true)
        expect(isSupersetOf(A1, X)).toBe(false)
    })
})
