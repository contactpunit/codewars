import {describe, it, expect} from 'vitest'
import { checkThreeAndTwo } from '../../../Easy/Array/CheckThreeAndTwo'

describe('Check three and two test suite', () => {
    it.each([
        [["a", "a", "a", "b", "b"], true],
        [["b", "b", "b", "c", "c"], true],
        [["a", "c", "a", "c", "b"], false],
        [["a", "a", "a", "a", "a"], false]
    ])("input %s return %s", (input, result) => {
        const actual = checkThreeAndTwo(input)
        expect(actual).toBe(result)
    })
})