import CadesPluginFake from '../support/fakes/cadesPluginFake';
import PluginService from '../../src/services/pluginService';
import SignerComFake from '../support/fakes/signerComFake';
import Signer from '../../src/models/signer';
import SignerComSyncFake from '../support/fakes/signerComSyncFake';
import CertificateComFake from '../support/fakes/certificateComFake';
import CertificateFactory from '../../src/factories/certificateFactory';

describe('Signer', () => {
  beforeEach(() => {
    global.cadesplugin = sandbox.createStubInstance(CadesPluginFake);
  });

  given('signerComObject', () => new SignerComFake());
  given('signer', () => new Signer(given.signerComObject));
  given('certificateComObject', () => new CertificateComFake());
  given('certificate', async () => new CertificateFactory().createFromCom(given.certificateComObject));

  describe('#withCertificate', () => {
    context('having an async version of the plugin', () => {
      it('should set certificate', async () => {
        const spy = sandbox.spy(given.signerComObject, 'propset_Certificate');
        await given.signer.withCertificate(given.certificate);
        expect(spy.calledOnceWith(given.certificate.comObject)).to.eq(true);
      });
    });

    context('having a sync version of the plugin', () => {
      beforeEach(() => {
        sandbox.stub(PluginService.prototype, 'isNativeMessagingSupported').callsFake(() => false);
      });
      given('signerComObject', () => new SignerComSyncFake());

      it('should set certificate', async () => {
        const spy = sandbox.spy(given.signerComObject, 'Certificate', ['set']);
        await given.signer.withCertificate(given.certificate);
        expect(spy.set.calledOnceWith(given.certificate.comObject)).to.eq(true);
      });
    });
  });

  describe('#withCertificateInclude', () => {
    context('having an async version of the plugin', () => {
      it('should set certificate include option', async () => {
        const spy = sandbox.spy(given.signerComObject, 'propset_Options');
        await given.signer.withCertificateInclude(1);
        expect(spy.calledOnceWith(1)).to.eq(true);
      });
    });

    context('having a sync version of the plugin', () => {
      beforeEach(() => {
        sandbox.stub(PluginService.prototype, 'isNativeMessagingSupported').callsFake(() => false);
      });
      given('signerComObject', () => new SignerComSyncFake());

      it('should set certificate include option', async () => {
        const spy = sandbox.spy(given.signerComObject, 'Options', ['set']);
        await given.signer.withCertificateInclude(1);
        expect(spy.set.calledOnceWith(1)).to.eq(true);
      });
    });
  });
});
