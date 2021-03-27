import AboutFactory from '../../src/factories/aboutFactory';
import About from '../../src/models/about';
import CadesPluginFake from '../support/fakes/cadesPluginFake';

describe('AboutFactory', () => {
  beforeEach(() => {
    global.cadesplugin = sandbox.createStubInstance(CadesPluginFake);
  });

  given('aboutFactory', () => new AboutFactory());

  it('should create About model', async () => {
    expect(await given.aboutFactory.create()).to.be.an.instanceof(About);
  });
});
