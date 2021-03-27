import Store from '../models/store';
import CadesComFactory from './cadesComFactory';
import logger from '../services/logger';

/**
 * @category 2. Factories
 */
class StoreFactory {
  /**
   * @returns {Promise<Store>}
   */
  async create() {
    const storeComObject = await CadesComFactory('CAdESCOM.Store');
    if (!storeComObject) {
      logger('error', 'Failed to create CAdESCOM.Store');
    }

    return new Store(storeComObject);
  }
}

export default StoreFactory;
