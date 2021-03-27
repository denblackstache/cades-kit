import logger from './logger';
import HashedDataFactory from '../factories/hashedDataFactory';
import Base64Service from './base64Service';
import { CADESCOM_CONTENT_ENCODING_TYPE } from '../enums';

/**
 * @category 1. Services
 */
class HashService {
  constructor(base64Service = new Base64Service(), hashedDataFactory = new HashedDataFactory()) {
    /**
     * @type {Base64Service}
     */
    this.base64Service = base64Service;
    /**
     * @type {HashedDataFactory}
     */
    this.hashedDataFactory = hashedDataFactory;
  }

  /**
   * @param payload
   * @param options
   * @returns {Promise<*>}
   */
  async hash(payload, options) {
    const payloadOption = (options && options.payloadOptions) || { encodeToBase64: true };
    const hashedDataOptions = (options && options.hashedDataOptions) || {
      dataEncodingType: CADESCOM_CONTENT_ENCODING_TYPE.CADESCOM_BASE64_TO_BINARY,
      algorithm: cadesplugin.CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256,
    };
    const hashedData = await this.hashedDataFactory.create();

    const payloadToHash = payloadOption.encodeToBase64 ? this.base64Service.encode(payload) : payload;

    if (!payloadToHash) {
      throw new Error('No payload to sign');
    }

    await hashedData.withDataEncoding(hashedDataOptions.dataEncodingType);
    await hashedData.withAlgorithm(hashedDataOptions.algorithm);

    try {
      await hashedData.hash(payloadToHash);
      return await hashedData.value();
    } catch (e) {
      logger('error', 'Failed to hash the payload', e);
      throw e;
    }
  }
}

export default HashService;
