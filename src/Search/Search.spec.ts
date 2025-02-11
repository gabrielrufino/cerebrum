import { describe, expect, it } from 'vitest'

import { Search } from './Search'

describe('Search', () => {
  it('should be defined', () => {
    expect(Search).toBeDefined()
  })
})

export class SearchTestsSuite {
  static execute(Class: new (elements?: Array<number>, target?: number) => Search) {
    it('should return the index of the target when it exists in the array', () => {
        const result = new Class()
          .setElements([1, 2, 3, 4, 5])
          .setTarget(3)
          .execute()
    
        expect(result).toBe(2)
      })
    
      it('should return null when the target does not exist in the array', () => {
        const result = new Class()
          .setElements([1, 2, 3, 4, 5])
          .setTarget(6)
          .execute()
    
        expect(result).toBeNull()
      })
    
      it('should throw an error if elements are not defined', () => {
        const search = new Class()
          .setTarget(3)
    
        expect(() => search.execute()).toThrow('Elements should be defined')
      })
    
      it('should throw an error if target is not defined', () => {
        const search = new Class()
          .setElements([1, 2, 3, 4, 5])
    
        expect(() => search.execute()).toThrow('Target should be defined')
      })
    
      it('should return the index when searching for 0 in a list that contains 0', () => {
        const result = new Class()
          .setElements([0, 1, 2, 3, 4, 5])
          .setTarget(0)
          .execute()
    
        expect(result).toBe(0)
      })
    
      it('should return null if target is smaller than all elements', () => {
        const result = new Class()
          .setElements([10, 20, 30, 40, 50])
          .setTarget(5)
          .execute()
    
        expect(result).toBeNull()
      })
    
      it('should return null if target is larger than all elements', () => {
        const result = new Class()
          .setElements([10, 20, 30, 40, 50])
          .setTarget(60)
          .execute()
    
        expect(result).toBeNull()
      })
  }
}
