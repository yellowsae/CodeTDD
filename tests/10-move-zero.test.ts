import { describe, expect, it } from 'vitest';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { moveZero, moveZero2 } from '../src/10-move-zero';
describe('移动零到数组末尾', () => {
  it('正常情况', () => {
    const arr: number[] = [1, 0, 3, 4, 0, 0, 0, 5];
    moveZero2(arr);
    expect(arr).toEqual([1, 3, 4, 5, 0, 0, 0, 0]);
  });
  it('数组为空', () => {
    const arr: number[] = [];
    moveZero2(arr);
    expect(arr).toEqual([]);
  });

  it('数组中没有 0', () => {
    const arr: number[] = [1, 2, 3, 4, 5];
    moveZero2(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('数组中只有 0', () => {
    const arr: number[] = [0, 0, 0, 0, 0];
    moveZero2(arr);
    expect(arr).toEqual([0, 0, 0, 0, 0]);
  });
});
