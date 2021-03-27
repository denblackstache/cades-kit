import CertificatesComSyncFake from './certificatesComSyncFake';

export default class StoreComSyncFake {
  Open() {
    console.log('Open is called');
  }

  Location() {
    return 'location_value';
  }

  Name() {
    return 'name_value';
  }

  Close() {
    console.log('Close is called');
  }

  get Certificates() {
    return new CertificatesComSyncFake();
  }
}
