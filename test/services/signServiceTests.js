import SignService from '../../src/services/signService';
import CadesPluginFake from '../support/fakes/cadesPluginFake';
import Signer from '../../src/models/signer';
import SignerFactory from '../../src/factories/signerFactory';

// TODO: complete the suite
describe.skip('SignService', () => {
  beforeEach(() => {
    global.cadesplugin = sandbox.createStubInstance(CadesPluginFake);
  });

  describe('#signBes', () => {
    given('signService', () => new SignService());
    given('payload', () => 'payload');
    given('certificate', () => 'certificate');
    given('options', () => undefined);

    beforeEach(() => {
      const signerStub = sandbox.createStubInstance(Signer);
      signerStub.withCertificate.callsFake(() => {
        console.log('withCertificate');
      });
      signerStub.withCertificateInclude.callsFake(() => {
        console.log('withCertificateInclude');
      });

      const signerFactoryStub = sandbox.createStubInstance(SignerFactory);
      signerFactoryStub.create.callsFake(async () => signerStub);
    });

    context('with payload and no options', () => {
      it('should sign a payload', async () => {
        expect(await given.signService.signBes(given.payload, given.certificate, given.options)).to.eq('');
      });
    });

    context('with no payload', () => {
      given('payload', () => null);

      it('should throw an error', async () => {
        expect(await given.signService.signBes(given.payload, given.certificate, given.options)).to.eq('');
      });
    });

    context('with payloadOptions', () => {
      given('options', () => ({ payloadOptions: null }));

      it('should sign a payload', async () => {
        expect(await given.signService.signBes(given.payload, given.certificate, given.options)).to.eq('');
      });
    });

    context('with signedDataOptions', () => {
      given('options', () => ({
        hashedDataOptions: null,
      }));

      it('should sign a payload', async () => {
        expect(await given.signService.signBes(given.payload, given.certificate, given.options)).to.eq('');
      });
    });

    context('with signerOptions', () => {
      given('options', () => ({
        hashedDataOptions: null,
      }));

      it('should sign a payload', async () => {
        expect(await given.signService.signBes(given.payload, given.certificate, given.options)).to.eq('');
      });
    });
  });
});
