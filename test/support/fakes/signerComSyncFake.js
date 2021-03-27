export default class SignerComSyncFake {
  set Certificate(certificate) {
    console.log('Certificate is set to:', certificate);
  }

  set Options(options) {
    console.log('Options is set to:', options);
  }
}
