import {describe, it, expect} from 'vitest'
import { equalize } from '../../../Easy/Array/EqualizeArray'

describe('equalize() test suite', () => {
    it.each([
        [[20,30,35,10],["+0","+10","+15","-10"]],
        [[10,12,24,50,0,15,20],["+0","+2","+14","+40","-10","+5","+10"]],
        [[],[]]
    ])('input array %s result is %s', (input, result) => {
        expect(equalize(input)).toEqual(result)
    })
})
