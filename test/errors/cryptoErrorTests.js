import CryptoError from '../../src/errors/cryptoError';

describe('CryptoError', () => {
  given('cryptoError', () => new CryptoError(new Error('something bad happened')));

  describe('#message', () => {
    it('should format the error message', () => {
      expect(given.cryptoError.message).to.eq('something bad happened');
    });
  });
});
