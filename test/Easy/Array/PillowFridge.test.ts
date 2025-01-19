import {describe, it, expect} from 'vitest'
import { pillow } from '../../../Easy/Array/PillowFridge';

describe('pillow() test suite', () => {
    it.each([
        [['EvH/KNikBiyxfeyK/miCMj', 'I/HwjnHlFLlahMOKNadps'], false],
        [['\\DjQ\\[zv]SpG]Z/[Qm\\eLL', 'amwZArsaGRmibriXBgTRZp'], false],
        [[ 'n', 'B' ], true],
        [['tztqwqptnxyuBxvosqqpwrvnBrruvw','yqqxnxwwontwqxntxnnrxzzvroouzs'], false]
    ])('%s input pillow, fridge result is %s', (pf, result) => {
        expect(pillow(pf)).toBe(result)
    })
})