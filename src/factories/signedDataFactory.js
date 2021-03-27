import SignedData from '../models/signedData';
import CadesComFactory from './cadesComFactory';

/**
 * @category 2. Factories
 */
class SignedDataFactory {
  /**
   * @returns {Promise<SignedData>}
   */
  async create() {
    const signedDataComObject = await CadesComFactory('CAdESCOM.CadesSignedData');

    return new SignedData(signedDataComObject);
  }
}

export default SignedDataFactory;
