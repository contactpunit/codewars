import { describe, it, expect } from 'vitest'
import { checkevery } from '../../../Easy/Array/EveryNth'

describe('checkevery test suite', () => {
    it('should test if input array returns expected result', () => {
        expect(checkevery([0,1,2,3,4])).toEqual([0,1,2,3,4])
    })
    
    it('should test if input array returns expeced result', () => {
        expect(checkevery([0,1,2,3,4], 1)).toEqual([0,1,2,3,4])
    })
    
    it('should test if input array returns expeced result', () => {
        expect(checkevery([0,1,2,3,4], 2)).toEqual([0,2,4])
    })

    it('should test if input array returns expeced result', () => {
        expect(checkevery([0,1,2,3,4], 3)).toEqual([0,3])
    })

    it('should test if input array returns expeced result result', () => {
        expect(checkevery([0,1,2,3,4], 3, 1)).toEqual([1,4])
    })

})