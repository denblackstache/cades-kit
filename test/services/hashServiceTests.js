import HashService from '../../src/services/hashService';
import CadesPluginFake from '../support/fakes/cadesPluginFake';

// TODO: complete the suite
describe.skip('HashService', () => {
  beforeEach(() => {
    global.cadesplugin = sandbox.createStubInstance(CadesPluginFake);
  });

  describe('#hash', () => {
    given('hashService', () => new HashService());
    given('payload', () => 'payload');
    given('options', () => undefined);

    context('with payload and no options', () => {
      it('should hash a payload', async () => {
        expect(await given.hashService.hash(given.payload, given.options)).to.eq('');
      });
    });

    context('with no payload', () => {
      given('payload', () => null);

      it('should throw an error', async () => {
        expect(await given.hashService.hash(given.payload, given.options)).to.eq('');
      });
    });

    context('with payloadOptions', () => {
      given('options', () => ({ payloadOptions: null }));

      it('should hash a payload', async () => {
        expect(await given.hashService.hash(given.payload, given.options)).to.eq('');
      });
    });

    context('with hashedDataOptions', () => {
      given('options', () => ({
        hashedDataOptions: null,
      }));

      it('should hash a payload', async () => {
        expect(await given.hashService.hash(given.payload, given.options)).to.eq('');
      });
    });
  });
});
