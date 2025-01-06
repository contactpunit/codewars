import { describe, it, expect } from 'vitest'
import { findEmployeesRole } from '../../../Easy/Array/FindEmployee'

describe('findEmployeesRole() test suite', () => {

    const employees = [
        { firstName: 'Ollie', lastName: 'Hepburn', role: 'Boss' },
        { firstName: 'Morty', lastName: 'Smith', role: 'Truck Driver' },
        { firstName: 'Peter', lastName: 'Ross', role: 'Warehouse Manager' },
        { firstName: 'Cal', lastName: 'Neil', role: 'Sales Assistant' },
        { firstName: 'Jesse', lastName: 'Saunders', role: 'Admin' },
        { firstName: 'Anna', lastName: 'Jones', role: 'Sales Assistant' },
        { firstName: 'Carmel', lastName: 'Hamm', role: 'Admin' },
        { firstName: 'Tori', lastName: 'Sparks', role: 'Sales Manager' },
        { firstName: 'Peter', lastName: 'Jones', role: 'Warehouse Picker' },
        { firstName: 'Mort', lastName: 'Smith', role: 'Warehouse Picker' },
        { firstName: 'Anna', lastName: 'Bell', role: 'Admin' },
        { firstName: 'Jewel', lastName: 'Bell', role: 'Receptionist' },
        { firstName: 'Colin', lastName: 'Brown', role: 'Trainee' }
      ]
      
    it.each([
        ['Anna Bent', "Does not work here!"],
        ["Morty Smith", "Truck Driver"],
        ["Dipper Pines", "Does not work here!"]
    ])('employee %s gets result %s', (employee, result) => {
        expect(findEmployeesRole(employee)).toBe(result)
    } )
})