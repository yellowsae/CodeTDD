import { describe, expect, it } from 'vitest';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findContinuousChar1,
  findContinuousChar2,
} from '../src/11-continuous-char';
import type { IRes } from '../src/11-continuous-char';
describe('连续字符和长度', () => {
  it('正常情况', () => {
    const str = 'aabbccdddeeeeeee111222222';
    const res: IRes = findContinuousChar2(str);
    expect(res).toEqual({
      char: 'e',
      length: 7,
    });
  });

  it('空字符串', () => {
    const str = '';
    const res: IRes = findContinuousChar2(str);
    expect(res).toEqual({
      char: '',
      length: 0,
    });
  });

  it('无连续字符', () => {
    const str = 'abc';
    const res: IRes = findContinuousChar2(str);
    expect(res).toEqual({
      char: 'a',
      length: 1,
    });
  });

  it('全部连续字符', () => {
    const str = 'aaa';
    const res: IRes = findContinuousChar2(str);
    expect(res).toEqual({
      char: 'a',
      length: 3,
    });
  });
});
