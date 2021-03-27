import CertificatesComFake from './certificatesComFake';

export default class StoreComFake {
  async Open() {
    console.log('Open is called');
  }

  async Location() {
    return 'location_value';
  }

  async Name() {
    return 'name_value';
  }

  async Close() {
    console.log('Close is called');
  }

  get Certificates() {
    console.log('Certificates is called');
    return Promise.resolve(new CertificatesComFake());
  }
}
