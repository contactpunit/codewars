import { describe, it, expect } from 'vitest'
import { partlist } from '../../../Easy/Array/PartsOfList'

describe('partlist() test suite', () => {
    it.each([
        [["I", "wish", "I", "hadn't", "come"], [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]],
        [["cdIw", "tzIy", "xDu", "rThG"], [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]],
        [["vJQ", "anj", "mQDq", "sOZ"], [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]]
    ])('input %s and bin %s results in %s', (input, output) => {
        expect(partlist(input)).toEqual(output)
    })
})