import { describe, it, expect } from 'vitest';
import { SelectionSort } from './SelectionSort';

describe('SelectionSort', () => {
  it('should sort an array of numbers in ascending order', () => {
    const unsorted = [64, 25, 12, 22, 11];
    const sorted = [11, 12, 22, 25, 64];
    expect(new SelectionSort(unsorted).execute()).toEqual(sorted);
  });

  it('should handle an empty array', () => {
    const unsorted: number[] = [];
    expect(new SelectionSort(unsorted).execute()).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const unsorted = [42];
    expect(new SelectionSort(unsorted).execute()).toEqual([42]);
  });

  it('should handle an array with already sorted elements', () => {
    const unsorted = [1, 2, 3, 4, 5];
    expect(new SelectionSort(unsorted).execute()).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with identical elements', () => {
    const unsorted = [5, 5, 5, 5, 5];
    expect(new SelectionSort(unsorted).execute()).toEqual([5, 5, 5, 5, 5]);
  });

  it('should sort an array with negative numbers', () => {
    const unsorted = [3, -1, -5, 2, 0];
    const sorted = [-5, -1, 0, 2, 3];
    expect(new SelectionSort(unsorted).execute()).toEqual(sorted);
  });
});
