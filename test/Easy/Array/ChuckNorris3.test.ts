import { describe, it, expect } from 'vitest'
import { headSmash } from '../../../Easy/Array/ChuckNorris3';


describe('headSmash() test suite', () => {
    it.each([
        [['*****************************************',
            '**  _O_   *   _O_   *   _O_   *   _O_  **',
            '** C(.)J  *  /(.)J  *  /(.)J  *  C(.)J **',
            '** _/ |_  *  _| |_  *  _( )_  *  _/ )_ *'],
        [
            '*****************************************',
            '**  _ _   *   _ _   *   _ _   *   _ _  **',
            '** C(.)J  *  /(.)J  *  /(.)J  *  C(.)J **',
            '** _/ |_  *  _| |_  *  _( )_  *  _/ )_ *'
        ]]
    ],)('%s input array of objects %s will result in %s', (input, result) => {
        expect(headSmash(input)).toEqual(result)
    })
})