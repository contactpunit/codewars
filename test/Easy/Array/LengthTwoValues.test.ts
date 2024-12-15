import {describe, it, expect} from 'vitest'
import { alternate } from '../../../Easy/Array/LengthTwoValues'

describe('alternate() test suite', () => {
    it.each([
        [5, true, false, [true, false, true, false, true]],
        [20, 'blue', 'red', ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']]
    ])('for n %s value1 %s value2 %s the result array is %s', (n, value1, value2, result) => {
        expect(alternate(n, value1, value2)).toEqual(result)
    })
})