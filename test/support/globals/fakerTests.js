describe('global.faker', () => {
  it('should exist', () => {
    expect(faker).to.exist;
  });

  it('should build a fake', () => {
    expect(faker.finance.creditCardCVV()).to.have.a.lengthOf(3);
  });
});
