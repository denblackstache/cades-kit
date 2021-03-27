export default class CertificateComSyncFake {
  constructor() {
    this.IssuerName = 'IssuerNameValue';
    this.SerialNumber = 'SerialNumberValue';
    this.SubjectName = 'SubjectNameValue';
    this.Thumbprint = 'ThumbprintValue';
    this.ValidFromDate = new Date().setHours(0, 0, 0, 0);
    this.ValidToDate = new Date().setHours(23, 59, 59, 0);
    this.Version = 'VersionValue';
  }

  Export() {
    return 'base64content';
  }

  ExtendedKeyUsage() {
    return {
      EKUs: {
        Item: i => ({ OID: `1.1.1.1.${i}` }),
        Count: 3,
      },
    };
  }

  Import(base64Content) {}
}
