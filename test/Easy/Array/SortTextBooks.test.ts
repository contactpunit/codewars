import { describe, it, expect } from 'vitest'
import { sorter } from '../../../Easy/Array/SortTextbooks';

describe('sorter() test suite', () => {
    it.each([
        [['Algebra', 'History', 'Geometry', 'English'], ['Algebra', 'English', 'Geometry', 'History']],
        [['Algebra', 'history', 'Geometry', 'english'], ['Algebra', 'english', 'Geometry', 'history']],
        [['Alg#bra', '$istory', 'Geom^try', '**english'], ['$istory', '**english', 'Alg#bra', 'Geom^try']],
        [['oSKuzluf', 'uMjDidaL', 'bFsZEHzZv', 'Cjfqfm', 'TFA', 'dpR', 'DarirRDa', 'pJPPTK'], ['bFsZEHzZv', 'Cjfqfm', 'DarirRDa', 'dpR', 'oSKuzluf', 'pJPPTK', 'TFA', 'uMjDidaL']]
    ])('%s input array of objects %s will result in %s', (input, result) => {
        expect(sorter(input)).toEqual(result)
    })
})