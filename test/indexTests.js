import CryptoCades from '../src';

describe('CryptoCades', () => {
  it('has all the exports', () => {
    expect(CryptoCades).to.have.all.keys(
      'AboutFactory',
      'CadesComFactory',
      'CertificateFactory',
      'SignerFactory',
      'StoreFactory',
      'PluginService',
      'SignService',
      'HashService',
    );
  });
});
