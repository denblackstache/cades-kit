import logger from '../../src/services/logger';

// TODO: complete the suite
describe.skip('Logger', () => {
  given('level', () => 'error');
  given('message', () => 'something bad happened');
  given('error', () => new Error());

  context('when a CryptoError is thrown', () => {
    it('should log it properly', () => {
      expect(logger(given.level, given.message, given.error)).to.eq('');
    });
  });
});
