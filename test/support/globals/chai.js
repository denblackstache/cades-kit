import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

chai.config.includeStack = true;

global.expect = chai.expect;
global.chai = chai;
