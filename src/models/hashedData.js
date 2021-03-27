import PluginService from '../services/pluginService';
import log from '../services/logger';

/**
 * @category 3. Models
 */
class HashedData {
  constructor(hashedDataComObject) {
    this.comObject = hashedDataComObject;
  }

  /**
   * @param dataEncoding
   */
  async withDataEncoding(dataEncoding) {
    if (!new PluginService().isNativeMessagingSupported()) {
      this.comObject.DataEncoding = dataEncoding;
      return;
    }
    await this.comObject.propset_DataEncoding(dataEncoding);
  }

  /**
   * @param algorithm
   */
  async withAlgorithm(algorithm) {
    if (!new PluginService().isNativeMessagingSupported()) {
      this.comObject.Algorithm = algorithm;
      return;
    }
    await this.comObject.propset_Algorithm(algorithm);
  }

  /**
   * @returns {Promise<string>}
   */
  async hash(payload) {
    try {
      return await this.comObject.Hash(payload);
    } catch (err) {
      log('error', "Can't create a hash because of an error", err);
      throw err;
    }
  }

  /**
   * @returns {Promise<*>}
   */
  async value() {
    try {
      return await this.comObject.Value;
    } catch (err) {
      log('error', "Can't retrieve a hash because of an error", err);
      throw err;
    }
  }
}

export default HashedData;
