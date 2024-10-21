import { describe, it, expect } from 'vitest'
import { LinearSearch } from './LinearSearch'

describe('LinearSearch', () => {
  it('should return the index of the target when it exists in the array', () => {
    const result = new LinearSearch()
      .setElements([1, 2, 3, 4, 5])
      .setTarget(3)
      .execute()

    expect(result).toBe(2)
  })

  it('should return null when the target does not exist in the array', () => {
    const result = new LinearSearch()
      .setElements([1, 2, 3, 4, 5])
      .setTarget(6)
      .execute()

    expect(result).toBeNull()
  })

  it('should throw an error if elements are not defined', () => {
    const search = new LinearSearch()
      .setTarget(3)

    expect(() => search.execute()).toThrow('Elements should be defined')
  })

  it('should throw an error if target is not defined', () => {
    const search = new LinearSearch()
      .setElements([1, 2, 3, 4, 5])

    expect(() => search.execute()).toThrow('Target should be defined')
  })

  it('should throw error if target is null', () => {
    const search = new LinearSearch()
      .setElements([1, 2, 3, 4, 5]).setTarget(null as any)

    expect(() => search.execute()).toThrow('Target should be defined')
  })

  it('should return the index when target is 0', () => {
    const result = new LinearSearch()
      .setElements([1, 0, 3, 4, 5]).setTarget(0)
      .execute()

    expect(result).toBe(1)
  })
})
