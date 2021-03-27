import {
  CAPICOM_CERTIFICATE_FIND_TYPE,
  CAPICOM_STORE_LOCATION,
  CAPICOM_STORE_NAMES,
  CAPICOM_STORE_OPEN_MODE,
} from '../enums';
import logger from '../services/logger';
import CertificateFactory from '../factories/certificateFactory';

/**
 * @category 3. Models
 */
class Store {
  /**
   * @param storeComObject
   */
  constructor(storeComObject) {
    this.comObject = storeComObject;
  }

  /**
   * @param storeLocation
   * @param storeName
   * @param openMode
   * @returns {Promise<void>}
   */
  async open(
    storeLocation = CAPICOM_STORE_LOCATION.CAPICOM_CURRENT_USER_STORE,
    storeName = CAPICOM_STORE_NAMES.CAPICOM_MY_STORE,
    openMode = CAPICOM_STORE_OPEN_MODE.CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED,
  ) {
    await this.comObject.Open(storeLocation, storeName, openMode);
  }

  async safeOpen(storeLocation, storeName, openMode) {
    try {
      await this.open(storeLocation, storeName, openMode);
      return true;
    } catch (e) {
      logger('error', 'Failed to open CAdESCOM.Store', e);
      return false;
    }
  }

  async location() {
    return this.comObject.Location;
  }

  async name() {
    return this.comObject.Name;
  }

  async close() {
    await this.comObject.Close();
  }

  async certificates() {
    await this.open();
    const comCertificates = await this.comCertificates();
    const certItemCount = await comCertificates.Count;
    const certItemPromises = [];
    for (let i = 1; i <= certItemCount; i += 1) {
      certItemPromises.push(comCertificates.Item(i));
    }
    const certComItems = await Promise.all(certItemPromises);
    const certFactory = new CertificateFactory();
    const certificateModels = await Promise.all(
      certComItems.map(async certComItem => {
        return certFactory.createFromCom(certComItem);
      }),
    );

    await this.close();
    return certificateModels.filter(el => el);
  }

  async findOne(criteria, findType = CAPICOM_CERTIFICATE_FIND_TYPE.CAPICOM_CERTIFICATE_FIND_SHA1_HASH) {
    await this.open();
    const comCertificates = await this.comCertificates();
    const foundComCertificates = await this.comFind(comCertificates, findType, criteria);

    if (foundComCertificates.Count === 0) {
      await this.close();
      return null;
    }

    try {
      const certificateItem = await foundComCertificates.Item(1);
      await this.close();
      const certFactory = new CertificateFactory();

      return certFactory.createFromCom(certificateItem);
    } catch (err) {
      logger('error', 'Cannot import the certificate', err);
      throw err;
    }
  }

  /**
   * @private
   */
  async comCertificates() {
    return this.comObject.Certificates;
  }

  /**
   * @private
   */
  async comFind(comCertificates, findType, criteria) {
    return comCertificates.Find(findType, criteria);
  }
}

export default Store;
