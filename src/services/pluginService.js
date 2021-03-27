/**
 * @category 1. Services
 */
class PluginService {
  /**
   * @returns {boolean}
   */
  isNativeMessagingSupported() {
    return Boolean(cadesplugin.CreateObjectAsync);
  }

  /**
   * @returns {boolean}
   */
  isReady() {
    return Boolean(cadesplugin.CreateObjectAsync) || Boolean(cadesplugin.CreateObject);
  }
}

export default PluginService;
