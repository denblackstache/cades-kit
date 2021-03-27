import PluginService from '../../src/services/pluginService';
import StoreComSyncFake from '../support/fakes/storeComSyncFake';
import CadesPluginFake from '../support/fakes/cadesPluginFake';
import StoreComFake from '../support/fakes/storeComFake';
import Store from '../../src/models/store';
import CertificatesComFake from "../support/fakes/certificatesComFake";
import CertificatesComSyncFake from "../support/fakes/certificatesComSyncFake";

describe('Store', () => {
  beforeEach(() => {
    global.cadesplugin = sandbox.createStubInstance(CadesPluginFake);
  });

  given('storeComObject', () => new StoreComFake());
  given('store', () => new Store(given.storeComObject));

  describe('#open', () => {
    context('having an async version of the plugin', () => {
      it('should open a store', async () => {
        const spy = sandbox.spy(given.storeComObject, 'Open');
        await given.store.open();
        expect(spy.calledOnce).to.eq(true);
      });
    });

    context('having a sync version of the plugin', () => {
      beforeEach(() => {
        sandbox.stub(PluginService.prototype, 'isNativeMessagingSupported').callsFake(() => false);
      });
      given('storeComObject', () => new StoreComSyncFake());

      it('should open a store', async () => {
        const spy = sandbox.spy(given.storeComObject, 'Open');
        await given.store.open();
        expect(spy.calledOnce).to.eq(true);
      });
    });
  });

  describe('#close', () => {
    context('having an async version of the plugin', () => {
      it('should close a store', async () => {
        const spy = sandbox.spy(given.storeComObject, 'Close');
        await given.store.close();
        expect(spy.calledOnce).to.eq(true);
      });
    });

    context('having a sync version of the plugin', () => {
      beforeEach(() => {
        sandbox.stub(PluginService.prototype, 'isNativeMessagingSupported').callsFake(() => false);
      });
      given('storeComObject', () => new StoreComSyncFake());

      it('should close a store', async () => {
        const spy = sandbox.spy(given.storeComObject, 'Close');
        await given.store.close();
        expect(spy.calledOnce).to.eq(true);
      });
    });
  });

  describe('#certificates', () => {
    context('having an async version of the plugin', () => {
      it('should list certificate models from the store', async () => {
        const spyOpen = sandbox.spy(given.storeComObject, 'Open');
        const spyClose = sandbox.spy(given.storeComObject, 'Close');
        const certificates = await given.store.certificates();
        expect(spyOpen.calledOnce).to.eq(true);
        expect(spyClose.calledOnce).to.eq(true);
        expect(certificates).to.have.length(1);
      });
    });

    context('having a sync version of the plugin', () => {
      beforeEach(() => {
        sandbox.stub(PluginService.prototype, 'isNativeMessagingSupported').callsFake(() => false);
      });
      given('storeComObject', () => new StoreComSyncFake());

      it('should list certificate models from the store', async () => {
        const spyOpen = sandbox.spy(given.storeComObject, 'Open');
        const spyClose = sandbox.spy(given.storeComObject, 'Close');
        const certificates = await given.store.certificates();
        expect(spyOpen.calledOnce).to.eq(true);
        expect(spyClose.calledOnce).to.eq(true);
        expect(certificates).to.have.length(1);
      });
    });
  });

  describe('#findOne', () => {
    context('having an async version of the plugin', () => {
      it('should find one certificate which matches the criteria', async () => {
        const spyOpen = sandbox.spy(given.storeComObject, 'Open');
        const spyClose = sandbox.spy(given.storeComObject, 'Close');
        const spyFind = sandbox.spy(CertificatesComFake.prototype, 'Find');
        const certificate = await given.store.findOne('thumbprint');
        expect(spyOpen.calledOnce).to.eq(true);
        expect(spyFind.calledOnce).to.eq(true);
        expect(spyClose.calledOnce).to.eq(true);
        expect(certificate.comObject).to.be.not.null;
        expect(certificate.subjectName).to.be.not.null;
      });
    });

    context('having a sync version of the plugin', () => {
      beforeEach(() => {
        sandbox.stub(PluginService.prototype, 'isNativeMessagingSupported').callsFake(() => false);
      });
      given('storeComObject', () => new StoreComSyncFake());

      it('should find one certificate which matches the criteria', async () => {
        const spyOpen = sandbox.spy(given.storeComObject, 'Open');
        const spyClose = sandbox.spy(given.storeComObject, 'Close');
        const spyFind = sandbox.spy(CertificatesComSyncFake.prototype, 'Find');
        const certificate = await given.store.findOne('thumbprint');
        expect(spyOpen.calledOnce).to.eq(true);
        expect(spyFind.calledOnce).to.eq(true);
        expect(spyClose.calledOnce).to.eq(true);
        expect(certificate.comObject).to.be.not.null;
        expect(certificate.subjectName).to.be.not.null;
      });
    });
  });
});
