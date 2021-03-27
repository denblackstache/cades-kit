import CertificateComFake from './certificateComFake';

export default class CertificatesComFake {
  get Count() {
    return Promise.resolve(1);
  }

  async Item() {
    return new CertificateComFake();
  }

  async Find() {
    return new CertificatesComFake();
  }
}
