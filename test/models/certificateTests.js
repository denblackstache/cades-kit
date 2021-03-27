import CadesPluginFake from '../support/fakes/cadesPluginFake';
import CertificateComFake from '../support/fakes/certificateComFake';
import CertificateComSyncFake from '../support/fakes/certificateComSyncFake';
import CertificateFactory from '../../src/factories/certificateFactory';

describe('Certificate', () => {
  beforeEach(() => {
    global.cadesplugin = sandbox.createStubInstance(CadesPluginFake);
  });

  given('certificateComObject', () => new CertificateComFake());
  given('certificate', async () => new CertificateFactory().createFromCom(given.certificateComObject));

  describe('#export', () => {
    context('having an async version of the plugin', () => {
      it('should export the certificate', async () => {
        const certificate = await given.certificate;
        expect(await certificate.export()).to.eq('base64content');
      });
    });

    context('having a sync version of the plugin', () => {
      given('certificateComObject', () => new CertificateComSyncFake());

      it('should export the certificate', async () => {
        const certificate = await given.certificate;
        expect(await certificate.export()).to.eq('base64content');
      });
    });
  });

  describe('#getExtendedKeyUsage', () => {
    context('having an async version of the plugin', () => {
      it('should get the certificate OIDs', async () => {
        const certificate = await given.certificate;
        expect(await certificate.getExtendedKeyUsage()).to.have.members(['1.1.1.1.1', '1.1.1.1.2', '1.1.1.1.3']);
      });
    });

    context('having async version of the plugin', () => {
      given('certificateComObject', () => new CertificateComSyncFake());

      it('should get the certificate OIDs', async () => {
        const certificate = await given.certificate;
        expect(await certificate.getExtendedKeyUsage()).to.have.members(['1.1.1.1.1', '1.1.1.1.2', '1.1.1.1.3']);
      });
    });
  });
});
