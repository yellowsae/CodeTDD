import { describe, expect, test } from 'vitest';
import { binarySearch1, binarySearch2 } from '../src/06-binary-search';

describe('二分搜索', () => {
  test('正常情况', () => {
    const arr: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    expect(binarySearch1(arr, 10)).toBe(0);
    expect(binarySearch2(arr, 10)).toBe(0);
    expect(binarySearch1(arr, 80)).toBe(7);
    expect(binarySearch2(arr, 80)).toBe(7);
  });

  test('找不到', () => {
    const arr: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    expect(binarySearch1(arr, 1000)).toBe(-1);
    expect(binarySearch2(arr, 1000)).toBe(-1);
  });

  test('空数组', () => {
    const arr: number[] = [];
    expect(binarySearch1(arr, 10)).toBe(-1);
    expect(binarySearch2(arr, 10)).toBe(-1);
  });
});
