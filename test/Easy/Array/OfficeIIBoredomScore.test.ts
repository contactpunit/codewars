import { describe, it, expect} from 'vitest'
import { boredom } from '../../../Easy/Array/OfficeIIBoredomScore'

describe('Office 2 boredom score test suite', () => {

    it.each([
        [{tim: 'change', jim: 'accounts',
        randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
        laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
        mr: 'finance' }, 'kill me now'],
        [{ tim: 'IS', jim: 'finance',
        randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
        katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
        alex: 'regulation', john: 'accounts', mr: 'canteen' }, 'i can handle this'],
        [{ tim: 'accounts', jim: 'accounts',
        randy: 'pissing about', sandy: 'finance', andy: 'change',
        katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
        john: 'retail', mr: 'pissing about' }, 'party time!!']
    ])('Sentiment of %s is %s', (team, result) => {
        expect(boredom(team)).toBe(result)
    })
})