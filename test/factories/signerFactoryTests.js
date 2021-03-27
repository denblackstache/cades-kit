import SignerFactory from '../../src/factories/signerFactory';
import Signer from '../../src/models/signer';
import CadesPluginFake from '../support/fakes/cadesPluginFake';

describe('SignerFactory', () => {
  beforeEach(() => {
    global.cadesplugin = sandbox.createStubInstance(CadesPluginFake);
  });

  given('signerFactory', () => new SignerFactory());

  it('should create Signer model', async () => {
    expect(await given.signerFactory.create()).to.be.an.instanceof(Signer);
  });
});
