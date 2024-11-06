import { describe, it, expect } from 'vitest';
import { QuickSort } from './QuickSort';

describe('QuickSort', () => {
  it('should sort an unsorted array', () => {
    const numbers = [64, 34, 25, 12, 22, 11, 90];
    const sorted = new QuickSort(numbers).execute();
    expect(sorted).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  it('should return the same array if already sorted', () => {
    const numbers = [1, 2, 3, 4, 5];
    const sorted = new QuickSort(numbers).execute();
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort an array with duplicate numbers', () => {
    const numbers = [5, 1, 4, 2, 1];
    const sorted = new QuickSort(numbers).execute();
    expect(sorted).toEqual([1, 1, 2, 4, 5]);
  });

  it('should handle an empty array', () => {
    const numbers: number[] = [];
    const sorted = new QuickSort(numbers).execute();
    expect(sorted).toEqual([]);
  });

  it('should handle an array with a single element', () => {
    const numbers = [42];
    const sorted = new QuickSort(numbers).execute();
    expect(sorted).toEqual([42]);
  });

  it('should sort an array with negative numbers', () => {
    const numbers = [-3, -1, -4, 2, 0];
    const sorted = new QuickSort(numbers).execute();
    expect(sorted).toEqual([-4, -3, -1, 0, 2]);
  });
});
