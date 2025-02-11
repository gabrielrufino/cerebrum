import { describe, expect, it } from 'vitest'
import { LinearSearch } from './LinearSearch'
import { SearchTestsSuite } from './Search.spec'

describe('LinearSearch', () => {
  SearchTestsSuite.execute(LinearSearch)

  it('should return the index when target is 0', () => {
    const result = new LinearSearch()
      .setElements([1, 0, 3, 4, 5])
      .setTarget(0)
      .execute()

    expect(result).toBe(1)
  })
})
