import { describe, it, expect } from 'vitest'
import { dayPlan } from '../../../Easy/Array/ScheduleYourDay'

describe('dayPlan() test suite', () => {
    it.each([
        [8, 5, 30, [30, 83, 30, 83, 30, 83, 30, 83, 30]],
        [2, 2, 60, [60, 0, 60]],
        [3, 5, 60, 'You\'re not sleeping tonight!']
    ])('input %s with tasks %s and duration %s returns %s', (hours, tasks, duration, result) => {
        expect(dayPlan(hours, tasks, duration)).toEqual(result)
    })
})