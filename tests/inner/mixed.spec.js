describe('mixed', () => {
  test('good', () => {
    expect('a').toBe('a');
  });

  test('bad', () => {
    expect('a').toBe('b');
  });
});
