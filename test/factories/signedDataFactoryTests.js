import SignedDataFactory from '../../src/factories/signedDataFactory';
import SignedData from '../../src/models/signedData';
import CadesPluginFake from '../support/fakes/cadesPluginFake';

describe('SignedDataFactory', () => {
  beforeEach(() => {
    global.cadesplugin = sandbox.createStubInstance(CadesPluginFake);
  });

  given('signedDataFactory', () => new SignedDataFactory());

  it('should create SignedData model', async () => {
    expect(await given.signedDataFactory.create()).to.be.an.instanceof(SignedData);
  });
});
