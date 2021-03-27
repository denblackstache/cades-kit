import CadesComFactory from '../../src/factories/cadesComFactory';
import CadesPluginFake from '../support/fakes/cadesPluginFake';

describe('CadesComFactory', () => {
  beforeEach(() => {
    global.cadesplugin = sandbox.createStubInstance(CadesPluginFake);
  });

  given('cadesComFactory', () => CadesComFactory);

  it('should create COM object', async () => {
  });
});
