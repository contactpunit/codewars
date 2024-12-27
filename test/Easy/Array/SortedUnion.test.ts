import { describe, it, expect } from 'vitest'
import { uniteUnique } from '../../../Easy/Array/SortedUnion'

describe('uniteUnique() test suite', () => {
    it('sorting input mutiple params to get unique array', () => {
        expect(uniteUnique([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
    })

    it('sorting input mutiple params to get unique array', () => {
        expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4])
    })
    
    it('sorting input mutiple params to get unique array', () => {
        expect(uniteUnique([4, 3, 2, 2])).toEqual([4, 3, 2])
    })
    
    it('sorting input mutiple params to get unique array', () => {
        expect(uniteUnique([4, "a", 2], [])).toEqual([4, "a", 2])
    })

    it('sorting input mutiple params to get unique array', () => {
        expect(uniteUnique([], [4, "a", 2])).toEqual([4, "a", 2])
    })

    it('sorting input mutiple params to get unique array', () => {
        expect(uniteUnique([], [4, "a", 2], [])).toEqual([4, "a", 2])
    })

    it('sorting input mutiple params to get unique array', () => {
        expect(uniteUnique([])).toEqual([])
    })

    it('sorting input mutiple params to get unique array', () => {
        expect(uniteUnique([],[1, 2, 1, 2],[2, 1, 1, 2, 1])).toEqual([1, 2])
    })
})