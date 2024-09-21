import { describe, it, expect } from 'vitest';
import { TwoSum } from './TwoSum';

describe('TwoSum', () => {
  it('should return indices of the two numbers that add up to the target', () => {
    const twoSum = new TwoSum([1, 2, 3, 4, 5], 6);
    const result = twoSum.execute();
    expect(result).toEqual([0, 4]);
  });

  it('should return null if no pair of numbers add up to the target', () => {
    const twoSum = new TwoSum([1, 2, 3, 4, 5], 10);
    const result = twoSum.execute();
    expect(result).toBeNull();
  });

  it('should return indices of the first pair that adds up to the target', () => {
    const twoSum = new TwoSum([1, 2, 3, 3, 4], 6);
    const result = twoSum.execute();
    expect(result).toEqual([1, 4]);
  });

  it('should handle negative numbers', () => {
    const twoSum = new TwoSum([-1, 0, 1, 2], 1);
    const result = twoSum.execute();
    expect(result).toEqual([0, 3]);
  });

  it('should return null for an empty array', () => {
    const twoSum = new TwoSum([], 1);
    const result = twoSum.execute();
    expect(result).toBeNull();
  });

  it('should return null if there is only one number', () => {
    const twoSum = new TwoSum([1], 1);
    const result = twoSum.execute();
    expect(result).toBeNull();
  });
});
