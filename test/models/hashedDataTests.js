import HashedDataComFake from '../support/fakes/hashedDataComFake';
import HashedData from '../../src/models/hashedData';
import { CADESCOM_CONTENT_ENCODING_TYPE } from '../../src/enums';
import CadesPluginFake from '../support/fakes/cadesPluginFake';
import HashedDataComSyncFake from '../support/fakes/hashedDataComSyncFake';
import PluginService from '../../src/services/pluginService';

describe('HashedData', () => {
  beforeEach(() => {
    global.cadesplugin = sandbox.createStubInstance(CadesPluginFake);
  });

  given('hashedDataComObject', () => new HashedDataComFake());
  given('hashedData', () => new HashedData(given.hashedDataComObject));

  describe('#withDataEncoding', () => {
    context('having an async version of the plugin', () => {
      it('should set data encoding', async () => {
        const spy = sandbox.spy(given.hashedDataComObject, 'propset_DataEncoding');
        await given.hashedData.withDataEncoding(CADESCOM_CONTENT_ENCODING_TYPE.CADESCOM_BASE64_TO_BINARY);
        expect(spy.calledOnceWith(CADESCOM_CONTENT_ENCODING_TYPE.CADESCOM_BASE64_TO_BINARY)).to.eq(true);
      });
    });

    context('having a sync version of the plugin', () => {
      beforeEach(() => {
        sandbox.stub(PluginService.prototype, 'isNativeMessagingSupported').callsFake(() => false);
      });
      given('hashedDataComObject', () => new HashedDataComSyncFake());

      it('should set data encoding', async () => {
        const spy = sandbox.spy(given.hashedDataComObject, 'DataEncoding', ['set']);
        await given.hashedData.withDataEncoding(CADESCOM_CONTENT_ENCODING_TYPE.CADESCOM_BASE64_TO_BINARY);
        expect(spy.set.calledOnceWith(CADESCOM_CONTENT_ENCODING_TYPE.CADESCOM_BASE64_TO_BINARY)).to.eq(true);
      });
    });
  });

  describe('#withAlgorithm', () => {
    context('having an async version of the plugin', () => {
      it('should set algorithm', async () => {
        const spy = sandbox.spy(given.hashedDataComObject, 'propset_Algorithm');
        await given.hashedData.withAlgorithm(101);
        expect(spy.calledOnceWith(101)).to.eq(true);
      });
    });

    context('having a sync version of the plugin', () => {
      beforeEach(() => {
        sandbox.stub(PluginService.prototype, 'isNativeMessagingSupported').callsFake(() => false);
      });
      given('hashedDataComObject', () => new HashedDataComSyncFake());

      it('should set algorithm', async () => {
        const spy = sandbox.spy(given.hashedDataComObject, 'Algorithm', ['set']);
        await given.hashedData.withAlgorithm(101);
        expect(spy.set.calledOnceWith(101)).to.eq(true);
      });
    });
  });

  describe('#hash', () => {
    context('having an async version of the plugin', () => {
      it('should hash the payload', async () => {
        const spy = sandbox.spy(given.hashedDataComObject, 'Hash');
        await given.hashedData.hash('payload');
        expect(spy.calledOnceWith('payload')).to.eq(true);
      });
    });

    context('having a sync version of the plugin', () => {
      given('hashedDataComObject', () => new HashedDataComSyncFake());

      it('should hash the payload', async () => {
        const spy = sandbox.spy(given.hashedDataComObject, 'Hash');
        await given.hashedData.hash('payload');
        expect(spy.calledOnceWith('payload')).to.eq(true);
      });
    });
  });

  describe('#value', () => {
    context('having an async version of the plugin', () => {
      it('should return value of the hash', async () => {
        expect(await given.hashedData.value()).to.eq('hash_value');
      });
    });

    context('having a sync version of the plugin', () => {
      given('hashedDataComObject', () => new HashedDataComSyncFake());

      it('should return value of the hash', async () => {
        expect(await given.hashedData.value()).to.eq('hash_value');
      });
    });
  });
});
