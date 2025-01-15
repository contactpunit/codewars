import {describe, it, expect} from 'vitest'
import { conferencePicker } from '../../../Easy/Array/ConferenceTraveller'

describe('conferencePicker() test suite', () => {
    it.each([
        [['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'],['Stockholm','Paris','Melbourne'],'Paris'],
        [['Buenos Aires','Mexico City','Johannesburg'],['Melbourne','Moscow'],'Melbourne'],
        [['Tokyo','Madrid','Melbourne','Sydney','Rio De Janeiro','Saint Petersburg','Brisbane','Paris','Houston'],['Sydney','Chicago','Paris'],'Chicago'],
        [[],['Philadelphia','Osaka','Tokyo','Melbourne'],'Philadelphia'],
        [['London','Berlin','Mexico City','Melbourne','Buenos Aires','Hong Kong','Madrid','Paris'],['Berlin','Melbourne'],"No worthwhile conferences this year!"]
    ])('%s input can accomodate for total %s only %s result files', (visited, offered, result) => {
        expect(conferencePicker(visited, offered)).toBe(result)
    })
})