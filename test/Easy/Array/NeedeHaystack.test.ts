import { describe, it, expect } from 'vitest'
import { findNeedle } from '../../../Easy/Array/NeedleHaystack'

describe('findNeedle() test suite', () => {
    it.each([
        [['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false], 'found the needle at position 3'],
        [['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'], 'found the needle at position 5'],
        [[1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54], 'found the needle at position 30']
    ])('lamps %s and drone %s returns at %s', (input, result) => {
        expect(findNeedle(input)).toEqual(result)
    } )
})