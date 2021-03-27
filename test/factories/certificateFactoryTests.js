import CertificateFactory from '../../src/factories/certificateFactory';
import Certificate from '../../src/models/certificate';
import CadesPluginFake from '../support/fakes/cadesPluginFake';
import CadesComFactory from '../../src/factories/cadesComFactory';
import CertificateComFake from '../support/fakes/certificateComFake';

describe('CertificateFactory', () => {
  beforeEach(() => {
    global.cadesplugin = sandbox.createStubInstance(CadesPluginFake);
  });

  given('certificateFactory', () => new CertificateFactory());

  context.skip('having PEM certificate content', () => {
    beforeEach(() => {
      // TODO: refactor CadesComFactory to be able to mock
      sandbox.stub(CadesComFactory, 'default').callsFake(async () => new CertificateComFake());
    });

    it('should create Certificate model', async () => {
      expect(await given.certificateFactory.createFromContent('test')).to.be.an.instanceof(Certificate);
    });
  });

  context('having certificate COM object', () => {
    it('should create Certificate model', async () => {
      expect(await given.certificateFactory.createFromCom({})).to.be.an.instanceof(Certificate);
    });
  });
});
