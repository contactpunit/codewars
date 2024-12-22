import { describe, it, expect } from 'vitest'
import { sortTransform } from '../../../Easy/Strings/SortAndTransform'

describe('sortTransform() test suite', () => {
    it.each([
        [[121, 122, 123, 124, 125, 120, 122, 132], 'yzz-xy}-}yx-xy}'],
        [[111, 112, 113, 114, 115, 113, 114, 110], 'oprn-nors-sron-nors'],
        [[51, 62, 73, 84, 95, 100, 99, 126], '3>c~-3>d~-~d>3-3>d~']
    ])('array %s returns %s', (input, result) => {
        expect(sortTransform(input)).toBe(result)
    } )
})