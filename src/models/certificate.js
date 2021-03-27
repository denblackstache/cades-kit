import CAPICOM_ENCODING_TYPE from '../enums/capicom/CAPICOM_ENCODING_TYPE';

/**
 * @category 3. Models
 * @property {string} issuerName
 * @property {object} privateKey
 * @property {string} serialNumber
 * @property {string} subjectName
 * @property {string} thumbprint
 * @property {string} validFromDate
 * @property {string} validToDate
 * @property {number} version
 */
class Certificate {
  constructor(certificateComObject, attributes) {
    this.comObject = certificateComObject;
    Object.assign(this, attributes);
  }

  /**
   * @param {CAPICOM_ENCODING_TYPE} encodingType
   * @return {Promise<Promise<string> | string>}
   */
  async export(encodingType = CAPICOM_ENCODING_TYPE.CAPICOM_ENCODE_BASE64) {
    return this.comObject.Export(encodingType);
  }

  async getExtendedKeyUsage() {
    const extendedKeyUsage = await this.comObject.ExtendedKeyUsage();
    const EKUs = await extendedKeyUsage.EKUs;
    const count = await EKUs.Count;

    if (!count) {
      return [];
    }

    const OIDS = [];
    for (let i = 1; i <= count; i += 1) {
      const item = await EKUs.Item(i);
      OIDS.push(await item.OID);
    }

    return OIDS;
  }
}

export default Certificate;
