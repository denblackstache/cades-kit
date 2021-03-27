import Base64Service from '../../src/services/base64Service';

describe('Base64Service', () => {
  describe('#encode', () => {
    given('base64Service', () => new Base64Service());

    it('should encode a string', () => {
      expect(given.base64Service.encode('payload')).to.eq('cGF5bG9hZA==');
    });
  });

  describe('#decode', () => {
    it('should decode a base64 string', () => {
      expect(given.base64Service.decode('cGF5bG9hZA==')).to.eq('payload');
    });
  });
});
