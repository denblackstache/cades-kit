import StoreFactory from '../../src/factories/storeFactory';
import Store from '../../src/models/store';
import CadesPluginFake from '../support/fakes/cadesPluginFake';

describe('StoreFactory', () => {
  beforeEach(() => {
    global.cadesplugin = sandbox.createStubInstance(CadesPluginFake);
  });

  given('storeFactory', () => new StoreFactory());

  it.skip('should create Store model', async () => {
    // TODO: refactor CadesComFactory to be able to mock
    expect(await given.storeFactory.create()).to.be.an.instanceof(Store);
  });
});
