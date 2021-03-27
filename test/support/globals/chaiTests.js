describe('global.chai', () => {
  it('should exist', () => {
    expect(chai).to.exist;
  });

  it('should have chaiAsPromised loaded', () => {
    return expect(Promise.resolve()).to.eventually.be.fulfilled;
  });
});

describe('global.expect', () => {
  it('should exist', () => {
    expect(expect).to.exist;
  });
});
