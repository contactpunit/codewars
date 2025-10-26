import { describe, it, expect, beforeEach } from 'vitest'
import { diff } from '../../../Easy/Sets/ComplementSets'

describe('diff() test suite', () => {
    let A, AB, B, BA, E
    beforeEach(() => {
        A = new Set([1, 2, 3, 4])
        B = new Set([1, 3, 5, 7])
        AB = new Set([2, 4])
        BA = new Set([5, 7])
        E = new Set()
    })
    it('should return complement of other set', () => {
        expect([...diff(A, A)].sort()).toEqual([...E].sort())
        expect([...diff(A, B)].sort()).toEqual([...AB].sort())
        expect([...diff(B, A)].sort()).toEqual([...BA].sort())
        expect([...diff(B, E)].sort()).toEqual([...B].sort())
    })
})
