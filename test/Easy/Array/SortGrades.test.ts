import {describe, it, expect} from 'vitest'
import { sortGrades } from '../../../Easy/Array/SortGrades';

describe('addUsername() test suite', () => {
    it.each([
        [["V7", "V12", "V1"], ["V1", "V7", "V12"]],
        [["V13", "V14", "VB", "V0"], ["VB", "V0", "V13", "V14"]],
        [["V0+", "V0", "V16", "V2", "VB", "V6"], ["VB", "V0", "V0+", "V2", "V6", "V16"]],
        [["V7"], ["V7"]],
        [[], []]
    ])('%s input array of objects %s will result in %s', (input, result) => {
        expect(sortGrades(input)).toEqual(result)
    })
})