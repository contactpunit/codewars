import { describe, it, expect } from 'vitest'
import { arrange } from '../../../Easy/Array/OrderWeight'

describe('arrange() test suite', () => {
    it.each([
        [["200G","300G","150G","100KG"], ["150G","200G","300G","100KG"]],
        [["400G","100T","150KG","100G"], ["100G","400G","150KG","100T"]],
        [["4T","300G","450G","900KG"], ["300G","450G","900KG","4T"]],
        [["400T","100T","1T","100G"], ["100G","1T","100T","400T"]],
        [["1G","2KG","3T","100KG"], ["1G","2KG","100KG","3T"]],
        [["100KG","100G","150T","150KG"], ["100G","100KG","150KG","150T"]]
    ])('string %s returns array %s', (input, result) => {
        expect(arrange(input)).toEqual(result)
    } )
})