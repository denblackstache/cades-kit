import Signer from '../models/signer';
import CadesComFactory from './cadesComFactory';
import log from '../services/logger';

/**
 * @category 2. Factories
 */
class SignerFactory {
  /**
   * @returns {Promise<Signer>}
   */
  async create() {
    try {
      const signerComObject = await CadesComFactory('CAdESCOM.CPSigner');

      return new Signer(signerComObject);
    } catch (err) {
      log('error', 'Failed to create CAdESCOM.CPSigner', err);
      throw err;
    }
  }
}

export default SignerFactory;
