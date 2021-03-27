import About from '../../src/models/about';
import CadesPluginFake from '../support/fakes/cadesPluginFake';
import AboutComFake from '../support/fakes/aboutComFake';
import AboutComSyncFake from '../support/fakes/aboutComSyncFake';

describe('About', () => {
  beforeEach(() => {
    global.cadesplugin = sandbox.createStubInstance(CadesPluginFake);
  });

  given('aboutComObject', () => new AboutComFake());
  given('about', () => new About(given.aboutComObject));

  describe('#version', () => {
    context('having an async version of the plugin', () => {
      it('should return plugin version', async () => {
        expect(await given.about.version()).to.eq('1.2.3');
      });
    });

    context('having a sync version of the plugin', () => {
      given('aboutComObject', () => new AboutComSyncFake());

      it('should return plugin version', async () => {
        expect(await given.about.version()).to.eq('1.2.3');
      });
    });
  });

  describe('#cspVersion', () => {
    context('having an async version of the plugin', () => {
      it('should return CSP version', async () => {
        expect(await given.about.cspVersion()).to.eq('5.0.1');
      });
    });

    context('having a sync version of the plugin', () => {
      given('aboutComObject', () => new AboutComSyncFake());

      it('should return CSP version', async () => {
        expect(await given.about.cspVersion()).to.eq('5.0.1');
      });
    });
  });
});
