describe('global.given', () => {
  given('foo', () => 'bar');

  it('should exist', () => {
    expect(given).to.exist;
  });

  it('foo should be "bar"', () => {
    expect(given.foo).to.eq('bar');
  });
});
