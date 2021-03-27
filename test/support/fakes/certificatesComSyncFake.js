import CertificateComSyncFake from './certificateComSyncFake';

export default class CertificatesComSyncFake {
  get Count() {
    return 1;
  }

  Item() {
    return new CertificateComSyncFake();
  }

  Find() {
    return new CertificatesComSyncFake();
  }
}
