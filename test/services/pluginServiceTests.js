import PluginService from '../../src/services/pluginService';
import CadesPluginFake from '../support/fakes/cadesPluginFake';

describe('PluginService', () => {
  beforeEach(() => {
    global.cadesplugin = sandbox.createStubInstance(CadesPluginFake);
  });

  given('pluginService', () => new PluginService());

  describe('#isNativeMessagingSupported', () => {
    it('should show if NativeMessaging is supported', () => {
      expect(given.pluginService.isNativeMessagingSupported()).to.eq(true);
    });
  });

  describe('#isReady', () => {
    it('should show if the plugin is ready', () => {
      expect(given.pluginService.isReady()).to.eq(true);
    });
  });
});
