import { describe, it, expect } from 'vitest';

import { SieveOfErastosthenes } from './SieveOfErastosthenes';

describe('SieveOfErastosthenes', () => {
  it('should return an empty array if the limit is less than 2', () => {
    const primes = new SieveOfErastosthenes(1)
      .execute();

    expect(primes).toEqual([]);
  });

  it('should return correct primes for small limits', () => {
    const primes = new SieveOfErastosthenes(10)
      .execute();

    expect(primes).toEqual([2, 3, 5, 7]);
  });

  it('should return correct primes for a larger limit', () => {
    const primes = new SieveOfErastosthenes(20)
      .execute();

    expect(primes).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });

  it('should handle the edge case of limit = 2', () => {
    const primes = new SieveOfErastosthenes(2)
      .execute();
    expect(primes).toEqual([2]);
  });

  it('should handle the edge case of limit = 0', () => {
    const primes = new SieveOfErastosthenes(0)
      .execute();
    expect(primes).toEqual([]);
  });

  it('should handle the edge case of limit = 100', () => {
    const primes = new SieveOfErastosthenes(100)
      .execute();

    expect(primes).toEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
      53, 59, 61, 67, 71, 73, 79, 83, 89, 97
    ]);
  });
});
