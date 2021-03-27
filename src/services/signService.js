import Base64Service from './base64Service';
import SignerFactory from '../factories/signerFactory';
import SignedDataFactory from '../factories/signedDataFactory';
import { CADESCOM_CADES_TYPE, CAPICOM_CERTIFICATE_INCLUDE_OPTION, CADESCOM_CONTENT_ENCODING_TYPE } from '../enums';
import logger from './logger';

/**
 * @category 1. Services
 */
class SignService {
  constructor(
    base64Service = new Base64Service(),
    signerFactory = new SignerFactory(),
    signedDataFactory = new SignedDataFactory(),
  ) {
    /**
     * @type {Base64Service}
     */
    this.base64Service = base64Service;
    /**
     * @type {SignerFactory}
     */
    this.signerFactory = signerFactory;
    /**
     * @type {SignedDataFactory}
     */
    this.signedDataFactory = signedDataFactory;
  }

  /**
   * Create a basic electronic signature (CAdES-BES)
   * @param {string} payload
   * @param {Certificate} certificate
   * @param options Sign Options
   */
  async signBes(payload, certificate, options = { detached: false }) {
    const { detached } = options;
    const payloadOption = options.payloadOptions || { encodeToBase64: true };
    const signedDataOptions = options.signedDataOptions || {
      contentEncodingType: CADESCOM_CONTENT_ENCODING_TYPE.CADESCOM_BASE64_TO_BINARY,
    };
    const signerOptions = options.signerOptions || {
      certificateInclude: CAPICOM_CERTIFICATE_INCLUDE_OPTION.CAPICOM_CERTIFICATE_INCLUDE_END_ENTITY_ONLY,
    };

    const payloadToSign = payloadOption.encodeToBase64 ? this.base64Service.encode(payload) : payload;

    if (!payloadToSign) {
      throw new Error('No payload to sign');
    }

    const signer = await this.signerFactory.create();
    await signer.withCertificate(certificate);
    await signer.withCertificateInclude(signerOptions.certificateInclude);

    const signedData = await this.signedDataFactory.create();
    await signedData.withContentEncoding(signedDataOptions.contentEncodingType);
    await signedData.withContent(payloadToSign);

    try {
      return await signedData.signCades(signer, CADESCOM_CADES_TYPE.CADESCOM_CADES_BES, detached);
    } catch (e) {
      logger('error', 'Failed to sign the payload', e);
      throw e;
    }
  }
}

export default SignService;
