import { it, describe, expect } from 'vitest'
import { addLength } from '../../../Easy/Array/AddLength'

describe('addLength test suite()', () => {
    it.each([
        ['apple ban', ["apple 5", "ban 3"]],
        ['you will win', ["you 3", "will 4", "win 3"]]
    ])('%s input returns %s', (input, output) => {
        expect(addLength(input)).toEqual(output)
    })
})