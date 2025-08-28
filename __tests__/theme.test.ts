import { colors, spacing, typography, borderRadius, shadows } from '../src/theme';

describe('theme exports', () => {
  it('exports design tokens', () => {
    expect(colors).toBeTruthy();
    expect(spacing).toBeTruthy();
    expect(typography).toBeTruthy();
    expect(borderRadius).toBeTruthy();
    expect(shadows).toBeTruthy();
  });
});

