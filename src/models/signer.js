import PluginService from '../services/pluginService';

/**
 * @category 3. Models
 */
class Signer {
  /**
   * @param signerComObject
   */
  constructor(signerComObject) {
    this.comObject = signerComObject;
  }

  /**
   * @param {Certificate} certificate
   */
  async withCertificate(certificate) {
    if (!new PluginService().isNativeMessagingSupported()) {
      this.comObject.Certificate = certificate.comObject;
      return;
    }
    await this.comObject.propset_Certificate(certificate.comObject);
  }

  /**
   * @param {number} certificateIncludeOption
   */
  async withCertificateInclude(certificateIncludeOption) {
    if (!new PluginService().isNativeMessagingSupported()) {
      this.comObject.Options = certificateIncludeOption;
      return;
    }

    await this.comObject.propset_Options(certificateIncludeOption);
  }
}

export default Signer;
