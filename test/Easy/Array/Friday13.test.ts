import { describe, it, expect } from 'vitest'
import { killcount } from '../../../Easy/Array/Friday13'

describe('killcount test suite', () => {
    it.each([
        [[["Mike", 7],["Alysa", 3]], 7, ["Alysa"]],
        // [[ 0 ], 0],
        // [[ 1, 1, 1, 1, 1 ], 5]
    ])('should test if %s array results in %s', (councellers, ijson, result) => {
        expect(killcount(councellers, ijson)).toEqual(result)
    })

})