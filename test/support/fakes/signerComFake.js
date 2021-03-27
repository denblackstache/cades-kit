export default class SignerComFake {
  async propset_Certificate(certificate) {
    console.log('propset_Certificate is set to:', certificate);
  }

  async propset_Options(options) {
    console.log('propset_Options is set to:', options);
  }

}
