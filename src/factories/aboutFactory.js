import About from '../models/about';
import CadesComFactory from './cadesComFactory';

/**
 * @category 2. Factories
 */
class AboutFactory {
  /**
   * @returns {Promise<About>}
   */
  async create() {
    const aboutComObject = await CadesComFactory('CAdESCOM.About');

    return new About(aboutComObject);
  }
}

export default AboutFactory;
