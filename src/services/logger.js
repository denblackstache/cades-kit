import CryptoError from '../errors/cryptoError';

export default function log(level, message, error, ...args) {
  // eslint-disable-next-line no-console
  console.log(level.toUpperCase(), message, new CryptoError(error).message, ...args);
}
