import { describe, expect, it } from 'vitest'
import { GroupBy } from './GroupBy'

describe('groupBy', () => {
  interface Person {
    name: string
    age: number
    department: string
    salary: number
  }

  const people: Person[] = [
    { name: 'Alice', age: 30, department: 'Engineering', salary: 100000 },
    { name: 'Bob', age: 25, department: 'Engineering', salary: 80000 },
    { name: 'Charlie', age: 35, department: 'Marketing', salary: 70000 },
    { name: 'Diana', age: 28, department: 'Marketing', salary: 75000 },
    { name: 'Eve', age: 32, department: 'Engineering', salary: 90000 },
    { name: 'Frank', age: 40, department: 'Sales', salary: 85000 },
  ]

  it('should group items by department', () => {
    const groupBy = new GroupBy(people, 'department')
    const result = groupBy.execute()

    expect(result).toHaveProperty('Engineering')
    expect(result).toHaveProperty('Marketing')
    expect(result).toHaveProperty('Sales')

    // eslint-disable-next-line dot-notation
    expect(result['Engineering']).toHaveLength(3)
    // eslint-disable-next-line dot-notation
    expect(result['Marketing']).toHaveLength(2)
    // eslint-disable-next-line dot-notation
    expect(result['Sales']).toHaveLength(1)

    // eslint-disable-next-line dot-notation
    expect(result['Engineering']).toEqual([
      { name: 'Alice', age: 30, department: 'Engineering', salary: 100000 },
      { name: 'Bob', age: 25, department: 'Engineering', salary: 80000 },
      { name: 'Eve', age: 32, department: 'Engineering', salary: 90000 },
    ])
  })

  it('should group items by age', () => {
    const groupBy = new GroupBy(people, 'age')
    const result = groupBy.execute()

    expect(result).toHaveProperty('30')
    expect(result).toHaveProperty('25')
    expect(result).toHaveProperty('35')
    expect(result).toHaveProperty('28')
    expect(result).toHaveProperty('32')
    expect(result).toHaveProperty('40')

    expect(result['30']).toHaveLength(1)
    expect(result['25']).toHaveLength(1)
    expect(result['30'][0]).toEqual({ name: 'Alice', age: 30, department: 'Engineering', salary: 100000 })
  })

  it('should handle empty array', () => {
    const groupBy = new GroupBy([], 'department')
    const result = groupBy.execute()

    expect(result).toEqual({})
  })

  it('should handle single item', () => {
    const singlePerson = [{ name: 'John', age: 30, department: 'IT', salary: 50000 }]
    const groupBy = new GroupBy(singlePerson, 'department')
    const result = groupBy.execute()

    expect(result).toHaveProperty('IT')
    // eslint-disable-next-line dot-notation
    expect(result['IT']).toHaveLength(1)
    // eslint-disable-next-line dot-notation
    expect(result['IT'][0]).toEqual({ name: 'John', age: 30, department: 'IT', salary: 50000 })
  })

  it('should handle all items having same group key', () => {
    const sameDepartment = [
      { name: 'Alice', age: 30, department: 'Engineering', salary: 100000 },
      { name: 'Bob', age: 25, department: 'Engineering', salary: 80000 },
      { name: 'Charlie', age: 35, department: 'Engineering', salary: 70000 },
    ]

    const groupBy = new GroupBy(sameDepartment, 'department')
    const result = groupBy.execute()

    expect(result).toHaveProperty('Engineering')
    // eslint-disable-next-line dot-notation
    expect(result['Engineering']).toHaveLength(3)
    expect(Object.keys(result)).toHaveLength(1)
  })

  it('should work with different data types', () => {
    interface Product {
      id: number
      name: string
      category: string
      inStock: boolean
    }

    const products: Product[] = [
      { id: 1, name: 'Laptop', category: 'Electronics', inStock: true },
      { id: 2, name: 'Book', category: 'Education', inStock: false },
      { id: 3, name: 'Mouse', category: 'Electronics', inStock: true },
      { id: 4, name: 'Pen', category: 'Education', inStock: true },
    ]

    const groupBy = new GroupBy(products, 'inStock')
    const result = groupBy.execute()

    expect(result).toHaveProperty('true')
    expect(result).toHaveProperty('false')
    // eslint-disable-next-line dot-notation
    expect(result['true']).toHaveLength(3)
    // eslint-disable-next-line dot-notation
    expect(result['false']).toHaveLength(1)
  })

  it('should preserve original object references', () => {
    const originalPerson = people[0]
    const groupBy = new GroupBy(people, 'department')
    const result = groupBy.execute()

    // eslint-disable-next-line dot-notation
    expect(result['Engineering'][0]).toBe(originalPerson)
  })
})
