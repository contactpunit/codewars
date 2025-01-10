import { describe, it, expect } from 'vitest'
import { match } from '../../../Easy/Array/JobMatching2'

describe('largest) test suite', () => {
    let candidates = [{
        desiresEquity: true, 
        currentLocation: 'New York',
        desiredLocations: ['San Francisco', 'Los Angeles']
      }, {
        desiresEquity: false, 
        currentLocation: 'San Francisco',
        desiredLocations: ['Kentucky', 'New Mexico'] 
      }]
      let job1 = { equityMax: 0, locations: ['Los Angeles', 'New York'] },
          job2 = { equityMax: 1.2, locations: ['New York', 'Kentucky'] };
    it.each([
        [job1, candidates, 0],
        [job2, candidates, 2]
    ])('match function takes 2 inputs %s and %s and outputs %s', (jobs, candidates, expectResult) => {
        const result: any = match(jobs, candidates)
        expect(result.length).toBe(expectResult)
    })
})