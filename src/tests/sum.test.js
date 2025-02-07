import sum from "../sum";

describe('sums correctly', () => {
  test('adds 2 positives', () => {
    expect(sum(1,2)).toBe(3);
  });

  test('adds 2 negatives', () => {
    expect(sum(-5, -10)).toBe(-15);
  });

  test('adds a positive and a negative', () => {
    expect(sum(1, -2)).toBe(-1);
  });
});
