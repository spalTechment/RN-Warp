import { coverageDropper, UNUSED_CONSTANT_A, UNUSED_CONSTANT_B, UNUSED_CONSTANT_C, UNUSED_CONSTANT_D, UNUSED_CONSTANT_E } from '../src/utils/coverageProbe';

describe('coverageProbe.ts', () => {
  test('coverageDropper returns n for inputs 1..100 (covers branches)', () => {
    for (let n = 1; n <= 100; n++) {
      expect(coverageDropper(n)).toBe(n);
    }
  });

  test('coverageDropper returns 0 for values outside 1..100', () => {
    expect(coverageDropper(0)).toBe(0);
    expect(coverageDropper(101)).toBe(0);
  });

  test('constants are defined (covers constant lines)', () => {
    expect(UNUSED_CONSTANT_A).toBe(1);
    expect(UNUSED_CONSTANT_B).toBe(2);
    expect(UNUSED_CONSTANT_C).toBe(3);
    expect(UNUSED_CONSTANT_D).toBe(4);
    expect(UNUSED_CONSTANT_E).toBe(5);
  });
});
