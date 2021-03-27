import HashedData from '../models/hashedData';
import CadesComFactory from './cadesComFactory';

/**
 * @category 2. Factories
 */
class HashedDataFactory {
  /**
   * @returns {Promise<HashedData>}
   */
  async create() {
    const hashedDataComObject = await CadesComFactory('CAdESCOM.HashedData');

    return new HashedData(hashedDataComObject);
  }
}

export default HashedDataFactory;
