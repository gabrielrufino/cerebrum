import { describe, it, expect } from 'vitest'
import { BinarySearch } from './BinarySearch'

describe('BinarySearch', () => {
  it('should return the index of the target when it exists in the array', () => {
    const result = new BinarySearch()
      .setElements([1, 2, 3, 4, 5])
      .setTarget(3)
      .execute()

    expect(result).toBe(2)
  })

  it('should return null when the target does not exist in the array', () => {
    const result = new BinarySearch()
      .setElements([1, 2, 3, 4, 5])
      .setTarget(6)
      .execute()

    expect(result).toBeNull()
  })

  it('should throw an error if elements are not defined', () => {
    const search = new BinarySearch()
      .setTarget(3)

    expect(() => search.execute()).toThrow('Elements should be defined')
  })

  it('should throw an error if target is not defined', () => {
    const search = new BinarySearch()
      .setElements([1, 2, 3, 4, 5])

    expect(() => search.execute()).toThrow('Target should be defined')
  })

  it('should return the index when searching for 0 in a list that contains 0', () => {
    const result = new BinarySearch()
      .setElements([0, 1, 2, 3, 4, 5])
      .setTarget(0)
      .execute()

    expect(result).toBe(0)
  })

  it('should return null if target is smaller than all elements', () => {
    const result = new BinarySearch()
      .setElements([10, 20, 30, 40, 50])
      .setTarget(5)
      .execute()

    expect(result).toBeNull()
  })

  it('should return null if target is larger than all elements', () => {
    const result = new BinarySearch()
      .setElements([10, 20, 30, 40, 50])
      .setTarget(60)
      .execute()

    expect(result).toBeNull()
  })
})
