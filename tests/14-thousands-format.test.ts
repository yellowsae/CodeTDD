import { describe, expect, it } from 'vitest';
import { format1, format2 } from '../src/14-thousands-format';
describe('数字千分位格式化', () => {
  it('正常情况', () => {
    const res = format1(123456789);
    const res2 = format2(123456789);
    expect(res).toBe('123,456,789');
    expect(res2).toBe('123,456,789');
  });

  it('小于1000', () => {
    const res = format1(100);
    const res2 = format2(10);
    expect(res).toBe('100');
    expect(res2).toBe('10');
  });
});
