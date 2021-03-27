import { CADESCOM_CADES_TYPE } from '../enums';
import log from '../services/logger';
import PluginService from '../services/pluginService';

/**
 * @category 3. Models
 */
class SignedData {
  constructor(signedDataComObject) {
    this.comObject = signedDataComObject;
  }

  /**
   * @param contentEncoding
   */
  async withContentEncoding(contentEncoding) {
    if (!new PluginService().isNativeMessagingSupported()) {
      this.comObject.ContentEncoding = contentEncoding;
      return;
    }
    await this.comObject.propset_ContentEncoding(contentEncoding);
  }

  /**
   * @param content
   */
  async withContent(content) {
    if (!new PluginService().isNativeMessagingSupported()) {
      this.comObject.Content = content;
      return;
    }
    await this.comObject.propset_Content(content);
  }

  /**
   * @param {Signer} signer
   * @param cadesType
   * @param detached
   * @return {Promise<*>}
   */
  async signCades(signer, cadesType = CADESCOM_CADES_TYPE.CADESCOM_CADES_BES, detached = false) {
    try {
      return await this.comObject.SignCades(signer.comObject, cadesType, detached);
    } catch (err) {
      log('error', "Can't create a signature because of an error", err);
      throw err;
    }
  }
}

export default SignedData;
