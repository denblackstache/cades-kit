import Certificate from '../models/certificate';
import CadesComFactory from './cadesComFactory';
import logger from '../services/logger';

/**
 * @category 2. Factories
 */
class CertificateFactory {
  /**
   * @returns {Promise<Certificate>}
   */
  async createFromContent(content) {
    let certificateComObject;
    try {
      certificateComObject = await CadesComFactory('CAPICOM.Certificate');
    } catch (e) {
      logger('error', 'Failed to create CAPICOM.Certificate', e);
      throw e;
    }

    try {
      await certificateComObject.Import(content);
      return this.createFromCom(certificateComObject);
    } catch (e) {
      logger('error', 'Failed to import certificate content', e);
      throw e;
    }
  }

  /**
   * @returns {Promise<Certificate>}
   */
  async createFromCom(certificateComObject) {
    const attributes = await this.hydrateAttributes(certificateComObject);
    if (!attributes) {
      return null;
    }

    return new Certificate(certificateComObject, attributes);
  }

  /**
   * @private
   */
  async getOrDefault(promise, defaultValue = null) {
    try {
      return await promise;
    } catch (e) {
      logger('warn', 'Failed to hydrate certificate property', e);
      return defaultValue;
    }
  }

  /**
   * @private
   */
  async hydrateAttributes(comObject) {
    try {
      const values = await Promise.all([
        this.getOrDefault(comObject.IssuerName),
        this.getOrDefault(comObject.SerialNumber),
        this.getOrDefault(comObject.SubjectName),
        this.getOrDefault(comObject.Thumbprint),
        this.getOrDefault(comObject.ValidFromDate),
        this.getOrDefault(comObject.ValidToDate),
        this.getOrDefault(comObject.Version),
      ]);

      let validFromDate;
      try {
        validFromDate = new Date(values[4]);
      } catch (e) {
        validFromDate = null;
      }

      let validToDate;
      try {
        validToDate = new Date(values[5]);
      } catch (e) {
        validToDate = null;
      }

      return {
        issuerName: values[0],
        serialNumber: values[1],
        subjectName: values[2],
        thumbprint: values[3],
        validFromDate,
        validToDate,
        version: values[6],
      };
    } catch (e) {
      console.log('Failed to hydrate Certificate Attributes', e);
      return null;
    }
  }
}

export default CertificateFactory;
