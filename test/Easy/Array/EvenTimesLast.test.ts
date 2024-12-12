import { describe, it, expect} from 'vitest'
import { evenLast } from '../../../Easy/Array/EvenTimesLast'

describe('eventzimesLast() tets suite', () => {
    it('should add all even idx places and multiply with last element', () => {
        const input = [2, 3, 4, 5]
        const expected = 30
        expect(evenLast(input)).toBe(expected)
    })
})
