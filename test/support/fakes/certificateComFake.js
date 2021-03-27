export default class CertificateComFake {
  constructor() {
    this.IssuerName = Promise.resolve('IssuerNameValue');
    this.SerialNumber = Promise.resolve('SerialNumberValue');
    this.SubjectName = Promise.resolve('SubjectNameValue');
    this.Thumbprint = Promise.resolve('ThumbprintValue');
    this.ValidFromDate = Promise.resolve(new Date().setHours(0, 0, 0, 0));
    this.ValidToDate = Promise.resolve(new Date().setHours(23, 59, 59, 0));
    this.Version = Promise.resolve('VersionValue');
  }

  async Export() {
    return 'base64content';
  }

  async ExtendedKeyUsage() {
    return Promise.resolve({
      EKUs: Promise.resolve({
        Item: async i => Promise.resolve({ OID: Promise.resolve(`1.1.1.1.${i}`) }),
        Count: Promise.resolve(3),
      }),
    });
  }

  async Import(base64Content) {}
}
