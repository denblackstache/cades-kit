import { CADESCOM_CONTENT_ENCODING_TYPE } from '../../src/enums';
import CadesPluginFake from '../support/fakes/cadesPluginFake';
import SignedDataComFake from '../support/fakes/signedDataComFake';
import SignerComFake from '../support/fakes/signerComFake';
import SignedDataComSyncFake from '../support/fakes/signedDataComSyncFake';
import SignedData from '../../src/models/signedData';
import PluginService from '../../src/services/pluginService';
import Signer from '../../src/models/signer';

describe('SignedData', () => {
  beforeEach(() => {
    global.cadesplugin = sandbox.createStubInstance(CadesPluginFake);
  });

  given('signedDataComObject', () => new SignedDataComFake());
  given('signerComObject', () => new SignerComFake());
  given('signedData', () => new SignedData(given.signedDataComObject));
  given('signer', () => new Signer(given.signerComObject));

  describe('#withContentEncoding', () => {
    context('having an async version of the plugin', () => {
      it('should set content encoding', async () => {
        const spy = sandbox.spy(given.signedDataComObject, 'propset_ContentEncoding');
        await given.signedData.withContentEncoding(CADESCOM_CONTENT_ENCODING_TYPE.CADESCOM_BASE64_TO_BINARY);
        expect(spy.calledOnceWith(CADESCOM_CONTENT_ENCODING_TYPE.CADESCOM_BASE64_TO_BINARY)).to.eq(true);
      });
    });

    context('having a sync version of the plugin', () => {
      beforeEach(() => {
        sandbox.stub(PluginService.prototype, 'isNativeMessagingSupported').callsFake(() => false);
      });
      given('signedDataComObject', () => new SignedDataComSyncFake());

      it('should set content encoding', async () => {
        const spy = sandbox.spy(given.signedDataComObject, 'ContentEncoding', ['set']);
        await given.signedData.withContentEncoding(CADESCOM_CONTENT_ENCODING_TYPE.CADESCOM_BASE64_TO_BINARY);
        expect(spy.set.calledOnceWith(CADESCOM_CONTENT_ENCODING_TYPE.CADESCOM_BASE64_TO_BINARY)).to.eq(true);
      });
    });
  });

  describe('#withContent', () => {
    context('having an async version of the plugin', () => {
      it('should set content', async () => {
        const spy = sandbox.spy(given.signedDataComObject, 'propset_Content');
        await given.signedData.withContent('payload_value');
        expect(spy.calledOnceWith('payload_value')).to.eq(true);
      });
    });

    context('having a sync version of the plugin', () => {
      beforeEach(() => {
        sandbox.stub(PluginService.prototype, 'isNativeMessagingSupported').callsFake(() => false);
      });
      given('signedDataComObject', () => new SignedDataComSyncFake());

      it('should set content', async () => {
        const spy = sandbox.spy(given.signedDataComObject, 'Content', ['set']);
        await given.signedData.withContent('payload_value');
        expect(spy.set.calledOnceWith('payload_value')).to.eq(true);
      });
    });
  });

  describe('#signCades', () => {
    context('having an async version of the plugin', () => {
      it('should sign cades', async () => {
        const spy = sandbox.spy(given.signedDataComObject, 'SignCades');
        await given.signedData.signCades(given.signer);
        expect(spy.calledOnceWith(given.signer.comObject)).to.eq(true);
      });
    });

    context('having a sync version of the plugin', () => {
      beforeEach(() => {
        sandbox.stub(PluginService.prototype, 'isNativeMessagingSupported').callsFake(() => false);
      });

      it('should sign cades', async () => {
        const spy = sandbox.spy(given.signedDataComObject, 'SignCades');
        await given.signedData.signCades(given.signer);
        expect(spy.calledOnceWith(given.signer.comObject)).to.eq(true);
      });
    });
  });
});
